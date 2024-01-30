import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const isFooterEnabled = cfg.enableFooter
    const authorName = cfg.landingPageData.authorName
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        { !isFooterEnabled &&
          <div>
            <p>{i18n(cfg.locale).components.footer.createdWith}{" "} the <a href="https://www.digitalgardeningcollective.com">Digital Gardening Collective</a>'s <a href="https://github.com/DigitalGardeningCollective/front-porch">front-porch</a> fork of <a href={"https://quartz.jzhao.xyz/"}>Quartz v{version}</a>, © {year}</p>
            <ul>
              {Object.entries(links).map(([text, link]) => (
                <li>
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
        }
        { isFooterEnabled && 
            <div>
              <p>{ authorName } © {year}</p>
              <p id="powered-by">Powered by <a href={"https://github.com/DigitalGardeningCollective/front-porch"}>front-porch</a> and <a href={"https://quartz.jzhao.xyz/"}>Quartz</a></p>
            </div>
        }
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
