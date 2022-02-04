import { BtnLink } from "../btnLink";
import './style.scss';

export function Introduction() {
    return (
        <div className="introduction">

            <div className="main">
                <h1>Bealtiful homes <br />made for you</h1>
                <p>In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
            </div>

            <div className="footer">
                <BtnLink txtColor='rgb(0,0,0)' btnColor='rgba(225,255,255,0)' iconColor='rgb(255, 172, 18)' href='#' txt='See all listings' />
            </div>

        </div>
    )
}