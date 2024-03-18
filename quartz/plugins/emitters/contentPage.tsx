import path from "path"
import { visit } from "unist-util-visit"
import { Root } from "hast"
import { VFile } from "vfile"
import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import LandingConstructor from "../../components/Landing"
import ShowcaseItemConstructor from "../../components/ShowcaseItem"
import GardenConstructor from "../../components/Garden"
import CardConstructor from "../../components/Card"
import RecentlyPublishedConstructor from "../../components/RecentNotes"
import GrowthStageConstructor from "../../components/GrowthStage"
import TeamConstructor from "../../components/Team"
import RoleConstructor from "../../components/Role"
import DurationConstructor from "../../components/Duration"
import ToolsOrTechConstructor from "../../components/ToolsOrTech"
import RowConstructor from "../../components/Row"
import GridConstructor from "../../components/Grid"
import AuthorImageWithNameConstructor from "../../components/AuthorImageWithName"
import DatesConstructor from "../../components/Dates"
import DividerConstructor from "../../components/Divider"
import SearchConstructor from "../../components/Search"
import DarkModeConstructor from "../../components/Darkmode"
import RSSConstructor from "../../components/RSS"
import SocialIconsConstructor from "../../components/SocialIcons"
import ContributionsConstructor from "../../components/Contributions"
import AuthorImageConstructor from "../../components/AuthorImage"
import ReadingTimeConstructor from "../../components/ReadingTime"
import CoverImageConstructor from "../../components/CoverImage"
import TagListConstructor from "../../components/TagList"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { Argv } from "../../util/ctx"
import { FilePath, isRelativeURL, joinSegments, pathToRoot } from "../../util/path"
import { 
  defaultContentPageLayout, 
  sharedPageComponents, 
  contributionsEnabledGrowthPiecePageLayout,
  contributionsDisabledGrowthPiecePageLayout, 
  portfolioItemPageLayout,
  aboutPageLayout
} from "../../../quartz.layout"
import { Content } from "../../components"
import chalk from "chalk"
import { write } from "./helpers"
import DepGraph from "../../depgraph"

// get all the dependencies for the markdown file
// eg. images, scripts, stylesheets, transclusions
const parseDependencies = (argv: Argv, hast: Root, file: VFile): string[] => {
  const dependencies: string[] = []

  visit(hast, "element", (elem): void => {
    let ref: string | null = null

    if (
      ["script", "img", "audio", "video", "source", "iframe"].includes(elem.tagName) &&
      elem?.properties?.src
    ) {
      ref = elem.properties.src.toString()
    } else if (["a", "link"].includes(elem.tagName) && elem?.properties?.href) {
      // transclusions will create a tags with relative hrefs
      ref = elem.properties.href.toString()
    }

    // if it is a relative url, its a local file and we need to add
    // it to the dependency graph. otherwise, ignore
    if (ref === null || !isRelativeURL(ref)) {
      return
    }

    let fp = path.join(file.data.filePath!, path.relative(argv.directory, ref)).replace(/\\/g, "/")
    // markdown files have the .md extension stripped in hrefs, add it back here
    if (!fp.split("/").pop()?.includes(".")) {
      fp += ".md"
    }
    dependencies.push(fp)
  })

  return dependencies
}

export const ContentPage: QuartzEmitterPlugin<Partial<FullPageLayout>> = (userOpts) => {
  let opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultContentPageLayout,
    pageBody: Content(),
    ...userOpts,
  }

  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()
  const Landing = LandingConstructor()
  const ShowcaseItem = ShowcaseItemConstructor()
  const Garden = GardenConstructor()
  const Card = CardConstructor()
  const RecentlyPublished = RecentlyPublishedConstructor()
  const GrowthStage = GrowthStageConstructor()
  const Team = TeamConstructor()
  const Role = RoleConstructor()
  const Duration = DurationConstructor()
  const ToolsOrTech = ToolsOrTechConstructor()
  const Row = RowConstructor()
  const AuthorImageWithName = AuthorImageWithNameConstructor()
  const Dates = DatesConstructor()
  const Grid = GridConstructor()
  const Divider = DividerConstructor()
  const Search = SearchConstructor()
  const DarkMode = DarkModeConstructor()
  const RSS = RSSConstructor()
  const SocialIcons = SocialIconsConstructor()
  const Contributions = ContributionsConstructor()
  const AuthorImage = AuthorImageConstructor()
  const ReadingTime = ReadingTimeConstructor()
  const CoverImage = CoverImageConstructor()
  const TagList = TagListConstructor()

  return {
    name: "ContentPage",
    getQuartzComponents() {
      return [
          Head, Header, Body, ...header, ...beforeBody, pageBody, ...left, ...right, Footer, 
          Landing, ShowcaseItem,
          Garden, Card, RecentlyPublished,
          GrowthStage, Row, AuthorImageWithName, Dates, Contributions, ReadingTime,
          Team, ToolsOrTech, Role, Duration, Grid, Divider,
          Search, DarkMode, RSS, SocialIcons,
          AuthorImage, CoverImage, TagList
        ]
    },
    async getDependencyGraph(ctx, content, _resources) {
      const graph = new DepGraph<FilePath>()

      for (const [tree, file] of content) {
        const sourcePath = file.data.filePath!
        const slug = file.data.slug!
        graph.addEdge(sourcePath, joinSegments(ctx.argv.output, slug + ".html") as FilePath)

        parseDependencies(ctx.argv, tree as Root, file).forEach((dep) => {
          graph.addEdge(dep as FilePath, sourcePath)
        })
      }

      return graph
    },
    async emit(ctx, content, resources): Promise<FilePath[]> {
      const cfg = ctx.cfg.configuration
      const fps: FilePath[] = []
      const allFiles = content.map((c) => c[1].data)

      let containsIndex = false
      for (const [tree, file] of content) {
        const slug = file.data.slug!
        if (slug === "index") {
          containsIndex = true
        }

        const externalResources = pageResources(pathToRoot(slug), resources)
        const componentData: QuartzComponentProps = {
          ctx,
          fileData: file.data,
          externalResources,
          cfg,
          children: [],
          tree,
          allFiles,
        }

        let newOpts = null
        if (slug.includes("/essays/") || slug.includes("/notes/")) {
          if (componentData.fileData.frontmatter?.["contributions-enabled"]) {
            newOpts = { ...opts, ...contributionsEnabledGrowthPiecePageLayout }
          } else {
            newOpts = { ...opts, ...contributionsDisabledGrowthPiecePageLayout }
          }
        } else if (slug.includes("portfolio/")) {
          newOpts = { ...opts, ...portfolioItemPageLayout }
        } else if (slug.includes("about")) {
          newOpts = { ...opts, ...aboutPageLayout }
        }

        const content = renderPage(cfg, slug, componentData, newOpts ?? opts, externalResources)

        const fp = await write({
          ctx,
          content,
          slug,
          ext: ".html",
        })

        fps.push(fp)
      }

      if (!containsIndex && !ctx.argv.fastRebuild) {
        console.log(
          chalk.yellow(
            `\nWarning: you seem to be missing an \`index.md\` home page file at the root of your \`${ctx.argv.directory}\` folder. This may cause errors when deploying.`,
          ),
        )
      }

      return fps
    },
  }
}
