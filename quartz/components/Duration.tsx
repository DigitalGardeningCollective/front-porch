import { classNames } from "../util/lang"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Duration({ fileData, displayClass }: QuartzComponentProps) {
    const duration = fileData.frontmatter?.duration
    if (duration) {
        return (
            <div class={classNames(displayClass, "duration")}>
                <h4>Duration</h4>
                <p>{duration}</p>
            </div>
        )
    } else {
        return null
    }
}

Duration.css = `
.duration {
    margin: 0 0 0 0;

    h4 {
        margin: 0;
    }
}
`

export default (() => Duration) satisfies QuartzComponentConstructor