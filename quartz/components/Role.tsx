import { classNames } from "../util/lang"
import { isStringArray } from "../util/list"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Role({ fileData, displayClass }: QuartzComponentProps) {
    const role = fileData.frontmatter?.role
    if (role) {
        return (
            <div class={classNames(displayClass, "role")}>
                <h4>Role</h4>
                <ul>{isStringArray(role) && role.map((t) => <li>
                    {t}
                </li>)}</ul>
            </div>
        )
    } else {
        return null
    }
}

Role.css = `
.role {
    margin: 0 0 0 0;

    h4 {
        margin: 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
}
`

export default (() => Role) satisfies QuartzComponentConstructor