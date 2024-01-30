import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function Title({ fileData, displayClass }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title

  if (title) {
    return <h1 class={classNames(displayClass, "title")}>{title}</h1>
  } else {
    return null
  }
}
Title.css = `
.title {
  margin: .5rem 0 0 0;
}
`

export default (() => Title) satisfies QuartzComponentConstructor
