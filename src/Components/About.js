import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class About extends Component {
    render() {
        return (
            <section className="section">
                <div className="row">
                    <div className="container">
                        <ReactWOW animation='zoomIn'>
                            <div className="section__title">درباره ها</div>
                            <div className="section__subtitle">درباره ما - مهدی مبین حسنی</div>
                            <div className="section__desc">
                                برنامه نویس و طراح سایت - برنامه نویس اپلیکیشن های اندرویدی و آی او اس
                    </div>
                        </ReactWOW>

                    </div>
                </div>
                <div className="row">
                    <div className="about">
                        <div className="col-md-6 col-xs-12 col-sm-12 p-40">
                            <div className="about__title">مهدی حسنی </div>
                            <div className="about__desc">برنامه نویس سمت کلاینت </div>
                            <div className="about__desc">ui developer</div>
                            <div className="seperator"></div>
                            <div className="about__desc">javascript</div>
                            <div className="progress">
                                <ReactWOW animation='bounceInRight'>
                                    <div className="progress-bar progress-bar-success" role="progressbar"
                                        aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                        70%
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-12 p-40">
                            <div className="about__title">مبین حسنی </div>
                            <div className="about__desc">برنامه نویس سمت سرور </div>
                            <div className="about__desc">back end developer</div>
                            <div className="seperator"></div>
                            <div className="about__desc">javascript</div>
                            <ReactWOW animation='bounceInRight'>
                                <div className="progress-bar progress-bar-success" role="progressbar"
                                    aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                    70%
                                    </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;