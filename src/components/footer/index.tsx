import { BtnLink } from "../btnLink";

import logoIcon from '../../assets/icons/logo-icon.svg';
import facebookIcon from '../../assets/icons/social-fb-icon.svg';
import twitterIcon from '../../assets/icons/social-twitter-icon.svg';
import instagramIcon from '../../assets/icons/social-insta-icon.svg';

import './style.scss';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="title">
                    <h1>Make your dreams a <span>reality</span></h1>
                    <BtnLink txtColor='rgba(0, 0, 0, 1)' btnColor='rgba(255, 172, 18, 1)' iconColor='rgba(255, 255, 255, 1)' href='#' txt='Work with us' />
                </div>

                <hr />

                <div className="links">
                    <div className="main">
                        <img className="logo" src={logoIcon} alt="logo" />
                        <div className="socialLinks">
                            <a href="/"><img src={facebookIcon} alt="Facebook" /></a>
                            <a href="/"><img src={twitterIcon} alt="Twitter" /></a>
                            <a href="/"><img src={instagramIcon} alt="Instagram" /></a>
                        </div>
                    </div>

                    <div className="footer-column-links">
                        <h1>Column Heading</h1>
                        <a className="link" href="#">Link goes here</a>
                        <a className="link" href="#">Link goes here</a>
                        <a className="link" href="#">Link goes here</a>
                        <a className="link" href="#">Link goes here</a>
                    </div>

                    <div className="footer-column-links">
                        <h1>Column Heading</h1>
                        <a className="link" href="#">Link goes here</a>
                        <a className="link" href="#">Link goes here</a>
                        <a className="link" href="#">Link goes here</a>
                        <a className="link" href="#">Link goes here</a>
                    </div>

                    <div className="footer-column-links">
                        <h1>Column Heading</h1>
                        <a className="link" href="#">Link goes here</a>
                        <a className="link" href="#">Link goes here</a>
                        <a className="link" href="#">Link goes here</a>
                        <a className="link" href="#">Link goes here</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}