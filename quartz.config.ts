import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    // Add your data here
    landingPageData: {
      authorName: "Jane Doe",
      authorImageUrl: "default-author-image.jpeg",
      intro: {
        title: "Welcome!",
        firstLeadUp: "I'm",
        secondLeadUp: "and I'm a",
        whatIDo: ["Profession 1", "Hobbyist 1", "Digital Gardener"],
      },
      showcaseItems: [
        {
          imageUrl: "default-landing-item-image.jpg",
          title: "Example Showcase Item",
          description: "This is an example showcase item",
          linkPathname: "example",
        },
        {
          imageUrl: "default-landing-item-image.jpg",
          title: "Example Showcase Item",
          description: "This is an example showcase item",
          linkPathname: "example",
        }
      ],
    },
    gardenPageData: {
      title: "Welcome to my Digital Garden!",
      whatIWriteAbout: {
        leadUp: "I mainly publish notes and essays about",
        topics: ["topic 1", "topic 2", "topic 3"],
      },
      findMeOnCopy: "You can find me on these platforms:",
      gardenAuthorImageUrl: "default-author-image.jpeg",
      socialLinks: {
        twitter: "https://twitter.com/janedoe",
        facebook: "https://facebook.com/janedoe",
        github: "https://github.com/janedoe",
        linkedin: null,
      },
    },
    enableFooter: false,
    // Only edit if you know what you are doing
    pageTitle: "Front Porch",
    enableSPA: true,
    enablePopovers: false, // Temporarily disabling until the content inside the popover is responsive
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
