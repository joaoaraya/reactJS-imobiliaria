import { BtnLink } from "../btnLink";

import peopleImg from '../../assets/img/home-people-img.jpg'

import './style.scss'

export function Describle(props: any) {
    return (
        <div className="describle" >

            <div className={`cover ${props.imgPos}`} style={{ background: `url(${peopleImg}) no-repeat` }} />

            <div className="content">
                <div className="hrTitle" />
                <h1 className="title">You’re in good hands</h1>
                <p>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                <BtnLink txtColor='rgb(255, 255, 255)' btnColor='rgb(0, 0, 0)' iconColor='rgb(255, 172, 18)' href='#' txt='Learn more' />
            </div >

        </ div >
    )
}