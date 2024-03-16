import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  function GrowthStage({ fileData, displayClass }: QuartzComponentProps) {        
    const growthStage = fileData.frontmatter?.["growth-stage"]

    if (growthStage && typeof growthStage === "string") {
      return (
          <div id="growth-stage-div">
              {
                {
                  "seedling": <svg width="1.2rem" height="1.2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.7,3.3C20.7,3.3 19.3,3 17.2,3C11.7,3 1.6,5.1 3.2,20.8C4.3,20.9 5.4,21 6.4,21C24.3,21 20.7,3.3 20.7,3.3M7,17C7,17 7,7 17,7C17,7 11,9 7,17Z" /></svg>,
                  "budding": <svg width="1.2rem" height="1.2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2,22V20C2,20 7,18 12,18C17,18 22,20 22,20V22H2M11.3,9.1C10.1,5.2 4,6.1 4,6.1C4,6.1 4.2,13.9 9.9,12.7C9.5,9.8 8,9 8,9C10.8,9 11,12.4 11,12.4V17C11.3,17 11.7,17 12,17C12.3,17 12.7,17 13,17V12.8C13,12.8 13,8.9 16,7.9C16,7.9 14,10.9 14,12.9C21,13.6 21,4 21,4C21,4 12.1,3 11.3,9.1Z" /></svg>,
                  "evergreen": <svg width="1.2rem" height="1.2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12L12 2L5 12H6.86L3 18H10V22H14V18H21L17.14 12H19Z" /></svg>,
                  "statue": <svg width="1.2rem" height="1.2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M180.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c2.5 2.5 4.1 5.8 4.6 9.3l40.2 322H55.9L96.1 94c.4-3.5 2-6.8 4.6-9.3l80-80zM152 272c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H152zM32 448H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>,
                } [growthStage.toLowerCase()]
              }
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

      svg {
        color: var(--secondary);
      }

      .growth-stage-title {
        margin: 0;
        color: var(--secondary);
      }
    }
  `

  return GrowthStage
}) satisfies QuartzComponentConstructor
