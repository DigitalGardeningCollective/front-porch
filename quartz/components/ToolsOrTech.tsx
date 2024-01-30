import { classNames } from "../util/lang"
import { isStringArray } from "../util/list"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ToolsOrTech({ fileData, displayClass }: QuartzComponentProps) {
    const tools = fileData.frontmatter?.tools
    const tech = fileData.frontmatter?.tech
    const toolsOrTechText = tools ? "Tools" : (tech ? "Tech" : null)
    if (toolsOrTechText) {
        return (
            <div class={classNames(displayClass, "toolsOrTech")}>
                <h4>{ toolsOrTechText }</h4>
                {tools && <ul>{isStringArray(tools) && tools.map((t) => <li>
                    {t}
                </li>)}</ul>
                }
                {tech && <ul>{isStringArray(tech) && tech.map((t) => <li>
                    {t}
                </li>)}</ul>
                }
            </div>
        )
    } else {
        return null
    }
}

ToolsOrTech.css = `
.toolsOrTech {
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

export default (() => ToolsOrTech) satisfies QuartzComponentConstructor