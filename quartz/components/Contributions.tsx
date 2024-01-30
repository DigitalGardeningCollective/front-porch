import { isStringArray } from "../util/list";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    function Contributions({ fileData, cfg, displayClass }: QuartzComponentProps) {        
        const openToContributions = fileData.frontmatter?.openToContributions;
        const contributors = fileData.frontmatter?.contributors;
        const contributorLinks = fileData.frontmatter?.contributorLinks;
        if (openToContributions && typeof openToContributions == "boolean") {
            return (
                <div id="contributions-div">
                    { contributors && isStringArray(contributors) && isStringArray(contributorLinks) && contributors.length === contributorLinks.length &&
                        <p id="contributors">
                            <span>{ contributors.length } contributions</span> by{" "}
                            <span>
                                {contributors.map((c, index) => (
                                    <>
                                        <a href={contributorLinks[index]}>{c}</a>
                                        {index !== contributors.length - 1 && " and "}
                                    </>
                                ))}
                            </span>
                        </p>
                    }
                    <p id="cta">Contributions Welcome</p>
                </div>
            )
        } else {
            return null
        }
    }
    
    Contributions.css = `
    #contributions-div {
        display: flex;
        flex-direction: row;
        align-items: center;

        #contributors {
            border: 1px solid #666;
            padding: .13rem .50rem;
            margin: 0 1rem 0 0;

            span {
                font-weight: 600;

                a {
                    text-decoration: none;                
                }
            }
        }

        #cta {
            color: #666;
            fonr-weight: 600;
            margin: 0;
            border: 1px solid #666;
            padding: .13rem .50rem;
        }
    }
    `

    return Contributions
}) satisfies QuartzComponentConstructor


