import gardenStyle from "./styles/garden.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { sharedPageComponents } from "../../quartz.layout"
import * as Component from "../components"
import { defaultOptions } from "./Graph"

type CollectionData = {
    title: string
    description: string
    imageUrl: string
    link: string
}

export default (() => {
    function GardenComponent(data: QuartzComponentProps) {
        const { cfg: { landingPageData: { authorName }, gardenPageData }} = data
        const RecentlyPublishedComponent = Component.RecentNotes({ 
            title: "Recently Published", 
            limit: 3, 
            filter: (f: any) => 
                !f.slug.endsWith("index") && 
                (
                    f.slug.startsWith("garden/")  || 
                    f.slug.startsWith("blogroll/") || 
                    f.slug.startsWith("now/")
                )
        })
        const defaultGraphOptions = defaultOptions
        const GraphComponent = Component.Graph({ ...defaultGraphOptions, showOnlyGlobalGraph: true })

        const { 
            title,
            whatIWriteAbout: { leadUp, topics },
            findMeOnCopy,
            gardenAuthorImageUrl,
            socialLinks: { twitter, facebook, github, linkedin },
         } = gardenPageData;

         const collections = [
             {
                 title: 'Notes',
                 description: 'Atomic notes, i.e. single ideas',
                 imageUrl: 'garden/default-note-image.jpg',
                 link: 'garden/notes'
             },
             {
                 title: 'Essays',
                 description: 'Long-form narratives and opinion pieces',
                 imageUrl: 'garden/default-essay-image.jpg',
                 link: 'garden/essays'
             },
             {
                 title: 'MOCs',
                 description: 'MOCs (Maps of Content) on various topics',
                 imageUrl: 'garden/default-moc-image.jpg',
                 link: 'garden/mocs'
             },
             {
                 title: 'Contributions',
                 description: 'My contributions to pieces authored by others',
                 imageUrl: 'garden/default-contribution-image.jpg',
                 link: 'garden/contributions'
             }
        ]

        return (
            <div id="garden">  
                <div id="garden-header">
                    <img src={`../static/${gardenAuthorImageUrl}`} alt={`Photo of ${authorName}`} />
                    <div id="garden-info">
                        <h4>{ title }</h4>
                        <p>{ leadUp } <span>{ topics.slice(0, topics.length - 1).join(', ') }</span>, and <span>{ topics[topics.length - 1] }</span>.</p>
                        <p>{ findMeOnCopy }</p>
                        <ul>
                            { twitter && <li class="garden-social-item"><a href={twitter}><i class="fa-brands fa-x-twitter"></i></a></li> }
                            { facebook && <li class="garden-social-item"><a href={facebook}><i class="fa-brands fa-facebook"></i></a></li> }
                            { github && <li class="garden-social-item"><a href={github}><i class="fa-brands fa-github"></i></a></li> }
                            { linkedin && <li class="garden-social-item"><a href={linkedin}><i class="fa-brands fa-linkedin"></i></a></li> }
                        </ul>
                    </div>
                </div>
                <div id="garden-body">
                    <div id="garden-collections">
                        <h3>Collections</h3>
                        <div id="garden-collection-list">
                            { collections.map((c: CollectionData) => {
                                const CardComponent = Component.Card({ 
                                    data: 
                                        { 
                                            title: c.title, 
                                            description: c.description, 
                                            imageUrl: c.imageUrl, 
                                            link: c.link 
                                        } 
                                });
                                return <CardComponent { ...data } />
                                }) 
                            }
                        </div>
                    </div>
                    <RecentlyPublishedComponent { ...data } />
                    <GraphComponent { ...data } />
                </div>
            </div>
        )                
    }

    GardenComponent.css = gardenStyle

    return GardenComponent
}) satisfies QuartzComponentConstructor



