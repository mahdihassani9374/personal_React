import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="row">
                    <div className="container">
                        <div className="footer__top">
                            <div className="">
                                <ReactWOW animation='zoomIn'>
                                    <div className="col-md-4 col-xs-12 col-sm-12 p-0">
                                        <div className="footer__top__box">
                                            <div className="footer__top__box__icon">
                                                <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                            </div>
                                            <div>
                                                <p>تلفن : </p>
                                                <p>09212651629</p>
                                            </div>
                                        </div>
                                    </div>
                                </ReactWOW>
                                <ReactWOW animation='zoomIn'>
                                    <div className="col-md-4 col-xs-12 col-sm-12 p-0">
                                        <div className="footer__top__box">
                                            <div className="footer__top__box__icon">
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                            </div>
                                            <div>
                                                <p>ایمیل : </p>
                                                <p>mahdihassani9374@gmail.com</p>
                                                <p>mobinhassani9374@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </ReactWOW>
                                <ReactWOW animation='zoomIn'>
                                    <div className="col-md-4 col-xs-12 col-sm-12 p-0">
                                        <div className="footer__top__box" style={{ border: 'none' }}>
                                            <div className="footer__top__box__icon">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            </div>
                                            <div>
                                                <p>آدرس : </p>
                                                <p>tehran - yaft abad</p>
                                            </div>
                                        </div>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>

                        <div>
                            <h1 className="footer__title">مهدی و مبین حسنی </h1>
                            <div className="flex padding-10">
                                <ReactWOW animation='bounceInDown'>
                                    <a target="_blank" href="https://telegram.me/mahdihassani74" className="footer__link">
                                        <i className="fa fa-telegram" aria-hidden="true"></i>
                                    </a>
                                </ReactWOW>
                                <ReactWOW animation='bounceInDown'>
                                    <a target="_blank" href="https://www.instagram.com/mobinmahdihassani/" className="footer__link">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </ReactWOW>
                                <ReactWOW animation='bounceInDown'>
                                    <a target="_blank" href="https://telegram.me/mobinhassani" className="footer__link">
                                        <i className="fa fa-telegram" aria-hidden="true"></i>
                                    </a>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;