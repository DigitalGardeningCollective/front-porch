import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
    data: {
        title: string
        description: string
        imageUrl: string
        link: string
    } 
}

export default ((userOpts?: Options) => {
    function Card({ fileData, cfg, displayClass }: QuartzComponentProps) {
        const { data } = {  ...userOpts }

        return (
            <div class="card"> 
                <image src={`../static/${data?.imageUrl}`} alt="Card Image" />
                <div>
                    <h3>{ data?.title }</h3>
                    <p>{ data?.description }</p>
                    <a href={`/${data?.link}`}>Browse -{'>'}</a>
                </div>
            </div>
        )                
    }

    Card.css = `
    .card {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 300px;
        
        img {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            display: flex;
            width: 100%;
            height: 150px;
            object-fit: cover;
            margin: 0;
        }

        div {
            display: flex;
            flex-direction: column;
            flex: 3;

            h3 {
                margin-top: 1rem;
                margin-bottom: 0rem;
            }

            h3, p, a {
                margin-left: 1rem;
                color: var(--dark);
            }
        }
    }
    `

    return Card
}) satisfies QuartzComponentConstructor



