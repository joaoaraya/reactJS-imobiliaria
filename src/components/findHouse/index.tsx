import { CardHouse } from "../cardHouse";

import './style.scss'

export function FindHouse() {
    const casas = [
        {
            id: 0,
            name: 'Malto House',
            bed: '1',
            shower: '2',
            size: '90'
        },
        {
            id: 1,
            name: 'Malto House',
            bed: '1',
            shower: '2',
            size: '90'
        },
        {
            id: 2,
            name: 'Malto House',
            bed: '1',
            shower: '2',
            size: '90'
        },
        {
            id: 3,
            name: 'Malto House',
            bed: '1',
            shower: '2',
            size: '90'
        },
        {
            id: 4,
            name: 'Malto House',
            bed: '1',
            shower: '2',
            size: '90'
        },
        {
            id: 5,
            name: 'Malto House',
            bed: '1',
            shower: '2',
            size: '90'
        }
    ]

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