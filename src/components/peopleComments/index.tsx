import { useState } from "react";
import peopleImg from "../../assets/img/people-img.jpg";

import "./style.scss";

export function PeopleComments(props: any) {
    const [comment, setComment] = useState(0);

    const client = [
        {
            id: 0,
            picture: peopleImg,
            name: 'Lara Madrigal',
            comment: 'Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Et quidem faciunt, ut aut.'
        },
        {
            id: 1,
            picture: peopleImg,
            name: 'Lara Madrigal',
            comment: 'Good Work!'
        },
        {
            id: 2,
            picture: peopleImg,
            name: 'Lara Madrigal',
            comment: 'Great, I love this!'
        }
    ];

    return (
        <div className="peopleComments">
            <div className="comment">
                <div id='hr' />
                <h1>"{client[comment].comment}"</h1>
            </div>

            {client.map(i =>
                <div className="client" onClick={() => setComment(i.id)} onMouseOver={() => setComment(i.id)}>
                    <div id='picture'>
                        <img src={i.picture} alt="Perfil" />
                    </div>
                    <div id='name'>
                        <h1>{i.name}</h1>
                        <p>Client</p>
                    </div>
                </div>
            )}

        </div>
    )
}