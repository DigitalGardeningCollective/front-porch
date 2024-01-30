import { classNames } from "../util/lang"
import { getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function CultivationDates({ fileData, displayClass, cfg }: QuartzComponentProps) {
    
    function daysAgoFormat(date: Date, locale?: string): string {
        const currentDate = new Date();
        const diffInDays = Math.floor((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        const formatter = new Intl.RelativeTimeFormat(locale ?? "en-US", { numeric: "auto" });
        return formatter.format(-diffInDays, "day");
    }
    
    const publishedDate = daysAgoFormat(getDate(cfg, fileData)!, cfg.locale);
    const updatedDate = fileData.dates?.modified
    
    if (publishedDate ) {
        return (
            <div class={classNames(displayClass, "cultivation-dates")}>
                <p><span>Published:</span> {publishedDate}</p>
                {  updatedDate && 
                    <p><span>Last Tended:</span> {daysAgoFormat(updatedDate)}</p>
                }
            </div>
        )
    } else {
        return null
    }
}

CultivationDates.css = `
.cultivation-dates {
    margin: 0;
    padding: 0;

    p {
        margin: 0;
        line-height: 1rem;
        font-size: 0.7rem;

        span {
            font-weight: bold;
        }
    }
}
`

export default (() => CultivationDates) satisfies QuartzComponentConstructor