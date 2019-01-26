import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class Services extends Component {

    state = {
        services: [
            {title:' سایت واکنش گرا ',icon:'pe-7s-look',desc:'طراحی سایت واکنش گرا ( ریسپانسیو)  '},
            {title:'سئو سایت (SEO)',icon:'pe-7s-phone',desc:'با ما تو گوگل حالا حالاها بالا باشید'},
            {title:'خدمات و پشتیبانی رایگان',icon:'pe-7s-server',desc:'خدمات و پشتیبانی در کمترین زمان ممکن '},
            {title:'طراحی سایت داینامیک',icon:'pe-7s-monitor',desc:'سایتتو خودت طراحی کن '}
        ]
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
                            یکی از مهم ترین و کاربردی ترین ابزار کسب و کار و فعالیت در جامعه امروزی بدون شک طراحی سایت می باشد. Web Design یا طراحی سایت به مجموعه ای از صفحه های وب گفته می شود که شامل تصاویر و ویدئوها و متون و سایر فایل های دیجیتالی است. داده ها و اطلاعاتی که در طراحی سایت از آن استفاده می شود از طریق اینترنت بر روی سرورهایی که بر روی دیتا سنتر وجود دارد قرار گرفته است. زمانی که شما کار طراحی سایت خود را به پایان برسانید آن را به سرور انتقال می دهید و دامنه یا نام سایت خود را که باید از قبل خریداری نمایید را به آن اختصاص داده و اکنون در هر نقطه ای از جهان قابل مشاهده خواهید بود. در این نوشتار بر آن شدیم که مواردی را در جهت شرح اهمیت طراحی سایت بیان کنیم.
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
                                                        <i className={item.icon}></i>
                                                    </span>
                                                    <div className="section__box__title">
                                                       {item.title}
                            </div>
                                                    <div className="section__box__desc">
                                                      {item.desc}
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