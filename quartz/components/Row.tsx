import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  components: QuartzComponent[]
  hasSpacedBetweenJustification: boolean
  hasFlexStartAlignment?: boolean,
  classes?: string[]
}

export default ((opts?: Options) => {
  function Row(componentData: QuartzComponentProps) {
    const { displayClass } = componentData;
    const hasSpacedBetweenJustification = opts?.hasSpacedBetweenJustification ? opts.hasSpacedBetweenJustification : false;
    const hasFlexStartAlignment = opts?.hasFlexStartAlignment ? opts.hasFlexStartAlignment : false;
    const components = opts?.components;
    const classes = opts?.classes ?? [];

    if (components) {
        return (
            <div class={`row ${classes.join(" ")}
                ${classNames(displayClass, hasSpacedBetweenJustification ? "justify-space-between" : "justify-flex-start")}
                ${classNames(displayClass, hasFlexStartAlignment ? "align-flex-start" : "align-center")}
                `}>
              { components.map((Component, i) => <Component {...componentData} key={i} />) }
            </div>
          ) 
    } else {
        return null
    }
  }

  Row.css = `
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: .5rem;
    }
    .justify-flex-start {
        justify-content: flex-start;
    }
    .justify-space-between {        
        @media only screen and (min-width: 768px) {
          flex-direction: row;
          justify-content: space-between;
        }

        @media only screen and (max-width: 767px) {
          flex-direction: column;
          gap: 1rem;
          justify-content: flex-start;
          align-items: flex-start;
        }
    }
    .align-center {
      @media only screen and (min-width: 768px) {
        align-items: center;
      }
      @media only screen and (max-width: 767px) {
        align-items: flex-start;
      }
    }
    .align-flex-start {
        align-items: flex-start;
    }
  `
  return Row
}) satisfies QuartzComponentConstructor
