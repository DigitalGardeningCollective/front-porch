import { classNames } from "../util/lang";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function AuthorImage({ displayClass, cfg }: QuartzComponentProps) {
    const { landingPageData: { authorImageUrl, authorName } } = cfg;
    
    return (
        <img class={classNames(displayClass, "author-img")} src={`../../static/${authorImageUrl}`} alt={`Photo of ${authorName}`} />
    )
  }
  AuthorImage.css = `
  .author-img {
    margin: 0;
  }
  `

  return AuthorImage
}) satisfies QuartzComponentConstructor
