import { classNames } from "../util/lang"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    function Divider({ displayClass }: QuartzComponentProps) {  
        return (
            <hr class={classNames(displayClass, "divider")}/>
        )
    }
    
    Divider.css = `
    .divider {
        border: 0;
        margin: 1rem 0;
        border-top: .5px solid var(--lightgray);
    }
    `
  
    return Divider
  }) satisfies QuartzComponentConstructor



