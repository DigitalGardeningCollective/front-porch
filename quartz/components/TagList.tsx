import { pathToRoot, slugTag } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  removeTopMargin?: boolean
}

export default ((opts?: Options) => {
  function TagList({ fileData, displayClass }: QuartzComponentProps) {
    const tags = fileData.frontmatter?.tags
    const baseDir = pathToRoot(fileData.slug!)
    if (tags && tags.length > 0) {
      return (
        <ul class={classNames(displayClass, `tags ${opts && opts?.removeTopMargin ? "remove-top-margin" : "add-top-margin"}`)}>
          {tags.map((tag) => {
            const display = `#${tag}`
            const linkDest = baseDir + `/tags/${slugTag(tag)}`
            return (
              <li>
                <a href={linkDest} class="internal tag-link">
                  {display}
                </a>
              </li>
            )
          })}
        </ul>
      )
    } else {
      return null
    }
  }

  TagList.css = `
  .tags {
    list-style: none;
    display: flex;
    padding-left: 0;
    gap: 0.4rem;
    flex-wrap: wrap;
    justify-self: end;
  }

  .add-top-margin {
    margin: 1rem 0 0 0;
  }

  .remove-top-margin {
    margin: 0;
  }

  .section-li > .section > .tags {
    justify-content: flex-end;
  }
    
  .tags > li {
    display: inline-block;
    white-space: nowrap;
    margin: 0;
    overflow-wrap: normal;
  }

  a.internal.tag-link {
    border-radius: 8px;
    background-color: var(--highlight);
    padding: 0.2rem 0.4rem;
    margin: 0 0.1rem;
  }
  `
  return TagList
}) satisfies QuartzComponentConstructor
