import { classNames } from "../util/lang"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
    title: string
    description: string
    image: string
    imageLocation: string
    link: string
}

export default ((userOpts?: Options) => {
    function Card({ displayClass }: QuartzComponentProps) {
        const { title, description, image, imageLocation, link } = {  ...userOpts }

        return (
            <div class={classNames(displayClass, "card")}> 
                <image src={`../static/${imageLocation}/${image}`} alt="Card Image" />
                <div>
                    <h3>{ title }</h3>
                    <p>{ description }</p>
                    <a href={`/${link}`}>Browse &rarr;</a>
                </div>
            </div>
        )                
    }

    Card.css = `
    .card {
        display: flex;
        flex-direction: column;
        
        img {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            display: flex;
            width: 100%;
            height: 130px;
            margin: 0;
        }

        div {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            border: 1px solid var(--gray);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            border-top-style: none;

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



