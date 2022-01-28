import './style.scss';

export function CardHouse(props: any) {
    return (
        <div className="cardHouse">
            <img className="cover" src="" alt="house" />
            <h1>{props.data.name}</h1>
            <hr />
            <div className="infoIcons">
                <span>
                    <img src="" alt="bed" />
                    <p>{props.data.bed}</p>
                </span>

                <span>
                    <img src="" alt="shower" />
                    <p>{props.data.shower}</p>

                </span>

                <span>
                    <img src="" alt="size" />
                    <p>{props.data.size}</p>
                </span>
            </div>
        </div>
    )
}