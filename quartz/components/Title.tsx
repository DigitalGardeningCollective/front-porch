import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  useConfig?: boolean
}

export default ((opts?: Options) => {
  function Title({ fileData, displayClass, cfg }: QuartzComponentProps) {
    const options = opts;
    let title = undefined;

    if (options && options.useConfig) {
      title = cfg.landingPageData.authorName;
    } else {
      title = fileData.frontmatter?.title;
    }

    if (title) {
      return <h1 class={classNames(displayClass, "title")}>{title}</h1>
    } else {
      return null
    }
  }
  Title.css = `
  .title {
    margin: 0;
    font-size: 2rem;
  }
  `

  return Title
}) satisfies QuartzComponentConstructor
