import './Footer.scss';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import ScrollToTop from 'react-router-scroll-top';
import Copyright from "~/libs/Copyright/Copyright.jsx";
import facebookImg from '~/assets/images/facebook-logo.png';
import instagramImg from '~/assets/images/instagram-logo.png';
import youtubeImg from '~/assets/images/youtube.png';
import {PHONE_NUMBER, TEL_ATTRIBUTE, EMAIL, INSTAGRAM_LINK, FACEBOOK_LINK, YOUTUBE_LINK} from '~/assets/infoVars';
import {decodeString} from '~/libs/commonHelpers';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telephone: TEL_ATTRIBUTE,
            email: EMAIL
        }
    }

    componentDidMount() {
        this.setState({
            telephone: decodeString(TEL_ATTRIBUTE),
            email: decodeString(EMAIL)
        })
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-info">
                        <div className="footer-main-info">
                            <p>Контакты</p>
                            <p><a href={"mailto:" + this.state.email}>{decodeString(EMAIL)}</a></p>
                            <p><a href={"tel:" + this.state.telephone}>{decodeString(PHONE_NUMBER)}</a></p>
                            <p>Часы работы с 9.00 - 21.00, без выходных</p>
                        </div>
                        <div className="footer-link-to-main">
                            {/*<ScrollToTop/>*/}
                            <h2><Link to="/">Арт-школа Пушкарёвой, 2019 — {new Date().getFullYear()}</Link></h2>
                        </div>
                    </div>
                    <div className="footer-icons">
                        <a href={FACEBOOK_LINK} target="_blank"><img className="footer-icons__facebook"
                                                                     src={facebookImg}
                                                                     alt="Facebook"/></a>
                        <a href={INSTAGRAM_LINK} target="_blank"><img className="footer-icons__instagram"
                                                                      src={instagramImg}
                                                                      alt="Instagram"/></a>
                        <a href={YOUTUBE_LINK} target="_blank"><img className="header-icons__youtube"
                                                                    src={youtubeImg}
                                                                    alt="Youtube"/></a>
                    </div>
                    <div className="footer-link-to-policy">
                        <Link to="/policy" target="_blank">
                            Политика конфиденциальности
                        </Link>
                    </div>
                </div>
                <Copyright/>
            </footer>
        );
    }
}

export default Footer;
