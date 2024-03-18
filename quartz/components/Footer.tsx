import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import pkg from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

interface InternalLink {
  title: string
  path: string
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const frontPorchVersion = pkg["version"]
    const quartzVersion = pkg["quartz-version"]
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const isFooterEnabled = cfg.enableFooter
    const authorName = cfg.landingPageData.authorName
    const internalLinks: InternalLink[] = [
      { title: "Home", path: "/index" }, 
      { title: "Garden", path: "/garden" },
      { title: "Portfolio", path: "/portfolio" },
      { title: "Now", "path": "/now" },
      { title: "Blogroll", path: "/blogroll" },
      { title: "About", path: "/about" }
    ]
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        { !isFooterEnabled &&
          <div>
            <p id="created-with">{i18n(cfg.locale).components.footer.createdWith}{" "} the <a target="_blank" href="https://www.digitalgardeningcollective.com">Digital Gardening Collective</a>'s <a target="_blank" href="https://github.com/DigitalGardeningCollective/front-porch">Front Porch (v{frontPorchVersion})</a> fork of <a target="_blank" href={"https://quartz.jzhao.xyz/"}>Quartz v{quartzVersion}</a>, © {year}</p>
            <ul id="internal-links">
              {internalLinks.map(({ title, path }) => (
                <li>
                  <a href={path}>{title}</a>
                </li>
              ))}
            </ul>
            <ul id="external-links">
              {Object.entries(links).map(([text, link]) => (
                <li>
                  <a target="_blank" href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
        }
        { isFooterEnabled && 
            <div>
              <ul class="internal-links negative-top-margin">
                {internalLinks.map(({ title, path }) => (
                  <li>
                    <a href={path}>{title}</a>
                  </li>
                ))}
              </ul>
              <p id="powered-by">Powered by <a target="_blank" href={"https://github.com/DigitalGardeningCollective/front-porch"}>Front Porch</a> and <a target="_blank" href={"https://quartz.jzhao.xyz/"}>Quartz</a></p>
              <p>{ authorName } © {year}</p>
            </div>
        }
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
