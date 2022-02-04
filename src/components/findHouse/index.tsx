import { CardHouse } from "../cardHouse";
import { casas } from '../../databases/houseDB'

import './style.scss'

export function FindHouse() {
    return (
        <div className="findHouse">
            <div className="hrTitle" />
            <h1 className="title">Find your next place to live</h1>

            <div className="filters">
                <select className="looking">
                    <option hidden defaultValue="">Looking for</option>
                    <option value="add">add</option>
                </select>

                <select className="location">
                    <option hidden defaultValue="">Location</option>
                    <option value="add">add</option>
                </select>

                <select className="property">
                    <option hidden defaultValue="">Property Type</option>
                    <option value="add">add</option>
                </select>

                <select className="price">
                    <option hidden defaultValue="">Price</option>
                    <option value="add">add</option>
                </select>
            </div>

            <div className="houses">
                {casas.slice(0, 6).map(i => <CardHouse key={i.id} data={i} />)}
            </div>
        </div>
    )
}