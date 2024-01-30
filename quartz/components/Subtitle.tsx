import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  function Subtitle({ fileData, cfg, displayClass }: QuartzComponentProps) {        
    const title = fileData.frontmatter?.subtitle
      if (title) {
        return <h3 class={classNames(displayClass, "subtitle")}>{title}</h3>
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
