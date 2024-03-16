import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

export default (() => {
  function ReadingTime({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const { minutes, words: _words } = readingTime(text)
      const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
        minutes: Math.ceil(minutes),
    })

      return <p class={classNames(displayClass, "reading-time")}>{displayedTime}</p>
    } else {
      return null
    }
  }

  ReadingTime.css = `
  .reading-time {
    margin: 0;
    color: var(--darkgray);
    font-size: 0.8rem;
  }
  `
  return ReadingTime
}) satisfies QuartzComponentConstructor
