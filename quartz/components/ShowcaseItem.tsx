import { ShowcaseItem } from "../cfg"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
    showcaseItem: ShowcaseItem
}

export default ((userOpts?: Options) => {
    function ShowcaseItem({ fileData, cfg, displayClass }: QuartzComponentProps) {
        const { showcaseItem } = {  ...userOpts }

        if (showcaseItem) {
            return (
                <div class="showcase-item responsive"> 
                    <image class="showcase-img" src={`static/landing-showcase/${showcaseItem.image}`} alt="Landing Page Showcase Image" />
                    <div class="showcase-info">
                        <h3>{showcaseItem.title}</h3>
                        <p>{showcaseItem.description}</p>
                        <a target={!showcaseItem.hasExternalLink ? "_self" : "_target"} href={`${!showcaseItem.hasExternalLink ? `/${showcaseItem.pathnameOrUrl}` : `${showcaseItem.pathnameOrUrl}`}`}>Learn more</a>
                    </div>
                </div>
            )                
        } else {
            return null
        }      
    }

    ShowcaseItem.css = `
    .showcase-item {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        margin-top: 1rem;

        img {
            display: flex;
            width: 200px;
            height: 200px;
            padding: 0 1rem;
            flex: 2;
        }

        div {
            display: flex;
            flex-direction: column;
            flex: 3;

            h3, p {
                color: var(--dark);
            }
        }
    }
    `

    return ShowcaseItem
}) satisfies QuartzComponentConstructor



