import { classNames } from "../util/lang"
import { isStringArray } from "../util/list"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Team({ fileData, displayClass }: QuartzComponentProps) {
    const team = fileData.frontmatter?.team
    if (team) {
        return (
            <div class={classNames(displayClass, "team")}>
                <h4>Team</h4>
                <ul>{isStringArray(team) && team.map((t) => <li>
                    {t}
                </li>)}</ul>
            </div>
        )
    } else {
        return null
    }
}

Team.css = `
.team {
    margin: 0;

    h4 {
        margin: 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
}
`

export default (() => Team) satisfies QuartzComponentConstructor