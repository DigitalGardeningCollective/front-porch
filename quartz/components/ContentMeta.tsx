import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const growthStage = fileData.frontmatter?.["growth-stage"]
    const hasGrowthStage = growthStage && typeof growthStage === "string"
    const text = fileData.text

    if (text) {
      const segments: string[] = []

      if (fileData.dates) {
        if (hasGrowthStage) {
          segments.push(`Published on 
            ${formatDate(fileData.dates.published!, cfg.locale)}, 
            Last Tended on ${formatDate(fileData.dates.modified, cfg.locale)}`)
        } else {
          segments.push(formatDate(fileData.dates.published!, cfg.locale))
        }
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(displayedTime)
      }

      return <p class={classNames(displayClass, "content-meta")}>{segments.join(", ")}</p>
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin: .5rem 0 0 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
