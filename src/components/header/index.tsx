import { BtnLink } from "../btnLink";
import logoIcon from '../../assets/icons/logo-icon.svg';
import './style.scss';

export function Header() {
    return (
        <header>
            <div className="logo">
                <a href="/"><img src={logoIcon} alt="logo" /></a>
            </div>

            <div className="menus">
                <a className="navLink" href="#">Nav Link</a>
                <a className="navLink" href="#">Nav Link</a>
                <a className="navLink" href="#">Nav Link</a>
                <a className="navLink" href="#">Nav Link</a>
                <BtnLink txtColor='rgb(225,255,255)' btnColor='rgba(255, 172, 18, 1)' iconColor='rgb(0,0,0)' href='#' txt='Work with us' />
            </div>

        </header>
    )
}