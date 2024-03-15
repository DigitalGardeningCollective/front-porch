import { classNames } from "../util/lang"
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
    function Card({ displayClass }: QuartzComponentProps) {
        const { data } = {  ...userOpts }

        return (
            <div class={classNames(displayClass, "card")}> 
                <image src={`../static/${data?.imageUrl}`} alt="Card Image" />
                <div>
                    <h3>{ data?.title }</h3>
                    <p>{ data?.description }</p>
                    <a href={`/${data?.link}`}>Browse &rarr;</a>
                </div>
            </div>
        )                
    }

    Card.css = `
    .card {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--gray);
        border-radius: 5px;
        
        img {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            display: flex;
            width: 100%;
            height: 130px;
            object-fit: cover;
            margin: 0;
        }

        div {
            display: flex;
            flex-direction: column;
            padding: 1rem;

            h3 {
                margin-top: 0rem;
                margin-bottom: 0rem;
            }

            h3, p {
                color: var(--dark);
            }

            a {
                color: var(--secondary);
            }
        }
    }
    `

    return Card
}) satisfies QuartzComponentConstructor



