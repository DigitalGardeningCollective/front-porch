import { isStringArray } from "../util/list";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    function Contributions({ fileData, cfg }: QuartzComponentProps) {        
        const { githubUsername, gitHubFrontPorchRepoName } = cfg;
        const contributionsEnabled = fileData.frontmatter?.["contributions-enabled"];
        const totalContributions = fileData.frontmatter?.["total-contributions"];
        const contributors = fileData.frontmatter?.contributors;
        const contributorLinks = fileData.frontmatter?.["contributor-links"];
        if (contributionsEnabled && typeof contributionsEnabled == "boolean") {
            return (
                <div id="contributions-div">
                    { contributors && isStringArray(contributors) && isStringArray(contributorLinks) && contributors.length === contributorLinks.length &&
                        <p id="contributors" class="text-padding">
                            { totalContributions && typeof totalContributions === "number" &&
                                <span>{ totalContributions } contributions</span> 
                            }
                            {" "}by{" "}
                            <span>
                                {contributors.map((c, index) => (
                                    <>
                                        <a target="_blank" href={contributorLinks[index]}>{c}</a>
                                        {index !== contributors.length - 1 && " and "}
                                    </>
                                ))}
                            </span>
                        </p>
                    }
                    <a id="cta" target="_blank" href={`https://github.com/${githubUsername === "DigitalGardeningCollective" ? 
                                                            "joshwingreene/joshwingreene.github.io" : 
                                                            `${githubUsername}/${gitHubFrontPorchRepoName}`}/issues`
                                                    }><p class="text-padding">Contributions Welcome</p></a>
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
            border: 1px solid var(--dark);
            margin: 0 1rem 0 0;
            font-size: .8rem;
            font-weight: 600;

            span {
                a {
                    text-decoration: none;                
                }
            }
        }

        #cta {
            p {
                margin: 0;
                color: var(--secondary);
                font-size: .8rem;
                font-weight: 600;
                border: 1px solid var(--dark);
            }
        }

        .text-padding {
            padding: .05rem .45rem;
        }
    }
    `

    return Contributions
}) satisfies QuartzComponentConstructor


