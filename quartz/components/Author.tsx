import { isStringArray } from "../util/list";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    function Author({ fileData, cfg, displayClass }: QuartzComponentProps) {                
        const { landingPageData: { authorImageUrl, authorName } } = cfg;
        const firstName = authorName.split(' ')[0];
        
        if (authorImageUrl && firstName) {
            return (
                <div id="author-div">
                    <img src={`../../static/${authorImageUrl}`} alt={`Photo of ${authorName}`} />
                    <p id="first-name">{ firstName }</p>
                </div>
            )
        } else {
            return null
        }
    }
    
    Author.css = `
    #author-div {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-width: fit-content;
        
        img {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            margin: 0 .5rem 0 0;
        }

        #first-name {
            margin: 0 .5rem 0 0;
        }
    }
    `

    return Author
}) satisfies QuartzComponentConstructor


