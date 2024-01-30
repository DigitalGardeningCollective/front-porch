import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  isSpacedBetween: boolean
  components: QuartzComponent[]
}

export default ((opts?: Options) => {
  function Row(componentData: QuartzComponentProps) {
    const { displayClass } = componentData;
    const isSpacedBetween = opts?.isSpacedBetween ? opts.isSpacedBetween : false;
    const components = opts?.components;

    if (components) {
        return (
            <div class={`row ${classNames(displayClass, isSpacedBetween ? "space-between" : "flex-start")}`}>
              { components.map((Component, i) => <Component {...componentData} key={i} />) }
            </div>
          ) 
    } else {
        return null
    }
  }

  Row.css = `
    .row {
        align-items: center;
        margin-top: .5rem;
    }
    .flex-start {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .space-between {
        display: flex;
        
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
  `
  return Row
}) satisfies QuartzComponentConstructor
