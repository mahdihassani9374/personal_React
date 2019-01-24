import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import img from '../docs/images/profile.jpg';

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
                                <li><NavLink to="./projects"> نمونه کارها </NavLink></li>
                                <li><NavLink to="./aboutUs">درباره ما</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="header__section">
                    <h1 className="header__section__title wow bounceInUp wow bounceInDown">مهدی و مبین حسنی </h1>
                    <div className="text-center wow zoomIn">
                        <img src={img} className="header__section__img" alt="مهدی و مبین حسنی"/>
                    </div>
                    <div className="text-center">
                        <h4 className="header__section__desc wow bounceInUp">programmer and web designer</h4>
                        <h4 className="header__section__desc wow bounceInUp">ما عاشق برنامه نویسی ایم</h4>
                        <p className="padding-10 line-height-30 wow bounceInLeft"> بیشتر برنامه نویسان خوب برنامه نویسی می کنند نه
                            به این علت که انتظار دارند دستمزد بگیرند یا از سوی عموم تحسین شوند، بلکه چون برنامه نویسی برایشان
                    سرگرم کننده است</p>
                    </div>
                    <div className="text-center col-md-12 flex">
                        <NavLink to="/" className="header__section__link wow bounceInUp" data-toggle="tooltip" title="صفحه اصلی">
                            <i className="pe-7s-home"></i>
                        </NavLink>
                        <NavLink to="/aboutUs" className="header__section__link wow bounceInUp" data-toggle="tooltip" title="درباره ما">
                            <i className="pe-7s-users"></i>
                        </NavLink>
                        <NavLink to="/projects"  className="header__section__link wow bounceInUp" data-toggle="tooltip" title="پروژه ها">
                            <i className="pe-7s-diamond"></i>
                        </NavLink>
                    </div>
                </section>
            </header>
        );
    }
}

export default Header;