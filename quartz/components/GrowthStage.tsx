import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  function GrowthStage({ fileData, cfg, displayClass }: QuartzComponentProps) {        
    const growthStage = fileData.frontmatter?.growthStage
      if (growthStage && typeof growthStage === "string") {
        return (
            <div id="growth-stage-div">
                { growthStage === "seedling" && <i class="fa-solid fa-seedling"></i> }
                { growthStage === "budding" && <i class="fa-solid fa-plant-wilt"></i> }
                { growthStage === "evergreen" && <i class="fa-solid fa-tree"></i> }
                <h4 class={classNames(displayClass, "growth-stage-title")}>{growthStage[0].toUpperCase() + growthStage.slice(1)}</h4>
            </div>
        )
      } else {
        return null
      }
  }
  
  GrowthStage.css = `
  #growth-stage-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  .growth-stage-title {
    margin: 0 0 0 0;
  }
  `

  return GrowthStage
}) satisfies QuartzComponentConstructor
