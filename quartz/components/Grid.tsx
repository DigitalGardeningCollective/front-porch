import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  components: QuartzComponent[]
}

export default ((opts?: Options) => {
  function Grid(componentData: QuartzComponentProps) {
    const { displayClass } = componentData;
    const components = opts?.components;

    if (components) {
        return (
            <div class={classNames(displayClass, "grid")}>
                { components.map((Component, i) => <Component {...componentData} key={i} />) }
            </div>
          ) 
    } else {
        return null
    }
  }

  Grid.css = `
    .grid {
        width: 100%;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr;
    }
  `
  return Grid
}) satisfies QuartzComponentConstructor
