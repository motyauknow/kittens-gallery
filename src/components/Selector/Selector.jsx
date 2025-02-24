import { PICTURECARDS } from "../../content/pictureCards";

let tagsList = [];

PICTURECARDS.map((card) => (
    tagsList.push(...card.tags)
))

tagsList = Array.from(new Set(tagsList))

const Selector = () => {
    return (
        <div>
            <select>
                {tagsList.map((tag) => (
                    <option key={ tag }>{ tag }</option>
                ))}
            </select>
        </div>
    )
}

export default Selector;