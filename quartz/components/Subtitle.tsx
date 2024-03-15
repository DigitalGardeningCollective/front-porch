import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { getWhatIDoStr } from "../util/author";

interface Options {
  useConfig?: boolean
}

export default ((opts?: Options) => {
  function Subtitle({ fileData, cfg, displayClass }: QuartzComponentProps) {        
    const options = opts;
    let subtitle = undefined;

    if (options && options.useConfig) {
      subtitle = getWhatIDoStr(cfg.landingPageData.intro.whatIDo);
    } else {
      subtitle = fileData.frontmatter?.description;
    }
    
    if (subtitle) {
      return <h3 class={classNames(displayClass, "subtitle")}>{subtitle}</h3>
    } else {
      return null
    }
  }
  
  Subtitle.css = `
  .subtitle {
    margin: .5rem 0 0 0;
    color: var(--darkgray);
  }
  `

  return Subtitle
}) satisfies QuartzComponentConstructor
