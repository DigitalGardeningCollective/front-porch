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
        border-top: 1px solid var(--lightgray);
    }
    `
  
    return Divider
  }) satisfies QuartzComponentConstructor



