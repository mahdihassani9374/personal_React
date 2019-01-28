import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../docs/images/profile.jpg';
import ReactWOW from 'react-wow'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/">صفحه اصلی</NavLink></li>
                                <li><NavLink to="/projects"> نمونه کارها </NavLink></li>
                                <li><NavLink to="/aboutUs">درباره ما</NavLink></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to="/gallery">گالری عکس</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="header__section">
                    <ReactWOW animation='bounceInDown'>
                        <h1 className="header__section__title">مهدی و مبین حسنی </h1>
                    </ReactWOW>
                    <ReactWOW animation='zoomIn'>
                        <div className="text-center">
                            <img src={img} className="header__section__img" alt="مهدی و مبین حسنی" />
                        </div>
                    </ReactWOW>
                    <div className="text-center">
                        <ReactWOW animation='bounceInUp'>
                            <h4 className="header__section__desc">programmer and web designer</h4>
                        </ReactWOW>
                        <ReactWOW animation='bounceInUp'>
                            <h4 className="header__section__desc">ما عاشق برنامه نویسی ایم</h4>
                        </ReactWOW>
                        <ReactWOW animation='bounceInLeft'>
                            <p className="padding-10 line-height-30"> بیشتر برنامه نویسان خوب برنامه نویسی می کنند نه
                                    به این علت که انتظار دارند دستمزد بگیرند یا از سوی عموم تحسین شوند، بلکه چون برنامه نویسی برایشان
                    سرگرم کننده است</p>
                        </ReactWOW>
                    </div>
                    <div className="text-center col-md-12 flex">
                        <ReactWOW animation='bounceInUp'>
                            <NavLink to="/" className="header__section__link" data-toggle="tooltip" title="صفحه اصلی">
                                <i className="pe-7s-home"></i>
                            </NavLink>
                            <NavLink to="/aboutUs" className="header__section__link" data-toggle="tooltip" title="درباره ما">
                                <i className="pe-7s-users"></i>
                            </NavLink>
                            <NavLink to="/projects" className="header__section__link" data-toggle="tooltip" title="پروژه ها">
                                <i className="pe-7s-diamond"></i>
                            </NavLink>
                            <NavLink to="/gallery" className="header__section__link" data-toggle="tooltip" title="عکس ها ">
                                <i className="pe-7s-camera"></i>
                            </NavLink>
                        </ReactWOW>
                    </div>
            </section>
            </header >
        );
    }
}

export default Header;