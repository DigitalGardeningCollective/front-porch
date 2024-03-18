import landingStyle from "./styles/landing.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import * as Component from "../components"

export default (() => {
    function LandingComponent(data: QuartzComponentProps) {
        const { cfg: { landingPageData }} = data

        const { 
            authorName,
            authorImage,
            intro: { title, firstLeadUp, secondLeadUp, whatIDo },
            showcaseItems: landingPageShowcaseItems,
        } = landingPageData;

        const firstName = authorName.split(' ')[0]

        return (
            <div> 
                <div id="landing-header">
                    <img src={`static/author-image/${authorImage}`} alt={`Photo of ${authorName}`} />
                    <div id="basic-info">
                        <h4>{ title }</h4>
                        <p>{ firstLeadUp } <span>{ firstName }</span> { secondLeadUp }<span> { whatIDo.slice(0, whatIDo.length - 1).join(", ") }</span>, and a <span>{ whatIDo[whatIDo.length - 1] }</span>.</p>
                    </div>
                </div>
                <div id="landing-body">
                    { landingPageShowcaseItems.map((item) => {
                        const ShowcaseComponent = Component.ShowcaseItem({ showcaseItem: item })
                        return <ShowcaseComponent { ...data }  />
                        })
                    }
                </div>
            </div>
        )                
    }

    LandingComponent.css = landingStyle

    return LandingComponent
}) satisfies QuartzComponentConstructor



