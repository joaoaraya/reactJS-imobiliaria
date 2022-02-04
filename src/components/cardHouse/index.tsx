import bedIcon from '../../assets/icons/bed-icon.svg';
import showerIcon from '../../assets/icons/shower-icon.svg';
import sizeIcon from '../../assets/icons/size-icon.svg';

import './style.scss';

export function CardHouse(props: any) {
    return (
        <div className="cardHouse">
            <img className="cover" src={props.data.picture} alt="house" />
            <h1>{props.data.name}</h1>
            <hr />
            <div className="infoIcons">
                <span>
                    <img src={bedIcon} alt="bed" />
                    <p>{props.data.bed}</p>
                </span>

                <span>
                    <img src={showerIcon} alt="shower" />
                    <p>{props.data.shower}</p>

                </span>

                <span>
                    <img src={sizeIcon} alt="size" />
                    <p>{props.data.size}</p>
                </span>
            </div>
        </div>
    )
}