import gardenStyle from "./styles/garden.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import * as Component from "../components"
import { defaultOptions } from "./Graph"

type CollectionData = {
    title: string
    description: string
    image: string
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
            gardenAuthorImage,
            socialLinks: { twitter, facebook, github, linkedin },
         } = gardenPageData;

         const SocialIconsComponent = Component.SocialIcons({ 
            twitter,
            facebook,
            github,
            linkedin
        });

         const collections = [
             {
                 title: 'Notes',
                 description: 'Atomic notes, i.e. single ideas',
                 image: 'default-note-image.jpg',
                 link: 'garden/notes'
             },
             {
                 title: 'Essays',
                 description: 'Long-form narratives and opinion pieces',
                 image: 'default-essay-image.jpg',
                 link: 'garden/essays'
             },
             {
                 title: 'MOCs',
                 description: 'MOCs (Maps of Content) on various topics',
                 image: 'default-moc-image.jpg',
                 link: 'garden/mocs'
             },
             {
                 title: 'Contributions',
                 description: 'My contributions to pieces authored by others',
                 image: 'default-contribution-image.jpg',
                 link: 'garden/contributions'
             }
        ]

        return (
            <div id="garden">  
                <div id="garden-header" class="responsive">
                    <img src={`../static/author-image/${gardenAuthorImage}`} alt={`Photo of ${authorName}`} />
                    <div id="garden-info">
                        <h4>{ title }</h4>
                        <p>{ leadUp } <span>{ topics.slice(0, topics.length - 1).join(', ') }</span>, and <span>{ topics[topics.length - 1] }</span>.</p>
                        <p>{ findMeOnCopy }</p>
                        <SocialIconsComponent { ...data } />
                    </div>
                </div>
                <div id="garden-body">
                    <div id="garden-collections">
                        <h3>Collections</h3>
                        <div id="garden-collection-list">
                            { collections.map((c: CollectionData) => {
                                const CardComponent = Component.Card({ 
                                    title: c.title, 
                                    description: c.description, 
                                    image: c.image, 
                                    link: c.link,
                                    imageLocation: "garden-collection"
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



