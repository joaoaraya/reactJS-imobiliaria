import { BtnLink } from "../btnLink";

import "./style.scss";

export function CallOut() {
    return (
        <div className="callOut">
            <div className="hrTitle" />
            <h1 className="title">You’re in good hands</h1>
            <p>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
            <BtnLink txtColor='rgb(0,0,0)' btnColor='rgb(255, 172, 18)' iconColor='rgb(225,255,255)' href='#' txt='Work with us' />
        </div>
    )
}