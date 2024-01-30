import { ShowcaseItem } from "../cfg"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
    showcaseItem: ShowcaseItem
}

export default ((userOpts?: Options) => {
    function ShowcaseItem({ fileData, cfg, displayClass }: QuartzComponentProps) {
        const { showcaseItem } = {  ...userOpts }

        const getValueAfterCheck = (value: string | undefined, valueName: string) => {
            return value ? value : valueName + " Not Given"
        }

        return (
            <div class="showcase-item"> 
                <image src={`static/${getValueAfterCheck(showcaseItem?.imageUrl, "Image")}`} alt="Landing Page Showcase Image" />
                <div>
                    <h3>{ getValueAfterCheck(showcaseItem?.title, "Title") }</h3>
                    <p>{ getValueAfterCheck(showcaseItem?.description, "Description") }</p>
                    <a href={`/${getValueAfterCheck(showcaseItem?.linkPathname, "Link Pathname")}`}>Learn more</a>
                </div>
            </div>
        )                
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



