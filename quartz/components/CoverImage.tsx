import { classNames } from "../util/lang";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function CoverImage({ displayClass, fileData }: QuartzComponentProps) {
    const coverImage = fileData.frontmatter?.["cover-image"];
    const coverImageAltText = fileData.frontmatter?.["cover-image-alt-text"];
    
    if (coverImage && typeof coverImage === "string") {
        return (
            <img 
                class={classNames(displayClass, "cover-img")} 
                src={`../../static/item-cover/${coverImage}`} 
                alt={`${coverImageAltText && typeof coverImageAltText === "string" ? 
                    coverImageAltText : 
                    "Photo"
                }`} 
            />
        )
    } else {
        return null
    }
  }
  CoverImage.css = `
  .cover-img {
    margin: 1rem 0;
  }
  `

  return CoverImage
}) satisfies QuartzComponentConstructor
