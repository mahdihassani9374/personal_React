import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class Services extends Component {

    state = {
        services: [1, 2, 3, 4]
    }
    render() {
        return (
            <section className="section">
                <div className="row">
                    <div className="container">
                        <ReactWOW animation='zoomIn'>
                            <div className="section__title">معرفی</div>
                        </ReactWOW>

                        <ReactWOW animation='zoomIn'>
                            <div className="section__subtitle">خدماتی که ارائه می‌دهیم</div>
                        </ReactWOW>
                        <ReactWOW animation='zoomIn'>
                            <div className="section__desc  wow zoomIn">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                        </div>
                        </ReactWOW>

                        <div className="mt-80 mb-40">
                            {
                                this.state.services.map((item, index) =>
                                    <ReactWOW animation='zoomIn' key={index}>
                                        <div className="col-md-3 col-sm-6 col-xs-12">
                                            <div className="section__box">
                                                <div className="text-center">
                                                    <span className="section__box__icon">
                                                        <i className="pe-7s-look"></i>
                                                    </span>
                                                    <div className="section__box__title">
                                                        امنیت بالا و دسترسی سریع
                            </div>
                                                    <div className="section__box__desc">
                                                        لورم ایپسوم طراح و گرافیست کار در کارهای هنری که شامل موارد بالا می شوئ
                            </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ReactWOW>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;