import React, { Component } from 'react';
import projectImg4 from '../docs/images/project4.png';
import projectImg1 from '../docs/images/project1.png';
import projectImg2 from '../docs/images/project2.png';
import projectImg3 from '../docs/images/project3.png';
import projectImg5 from '../docs/images/project5.png';

class ProjectItem extends Component {
    render() {
        return (
            <section className="section p-0">
                <div className="row">
                    <div className="container">
                        <div className="section__title wow zoomIn">پروژه ها</div>
                        <div className="section__subtitle wow zoomIn">پروژه های انجام شده ما تحت وب</div>
                        <div className="section__desc wow zoomIn">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                    </div>
                        <div className="mt-80 mb-40 flex">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="link">
                                    <div className="section__box p-0 pulse-hover wow zoomIn">
                                        <div className="text-center">
                                            <img src={projectImg4} className="img-responsive" alt="اکانت گیم" />
                                            <div className="padding-10">
                                                اکانت گیم
                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="link">
                                    <div className="section__box p-0 pulse-hover wow zoomIn">
                                        <div className="text-center">
                                            <img src={projectImg1} className="img-responsive" alt="ایمن صنعت پارسیان" />
                                            <div className="padding-10">
                                                ایمن صنعت پارسیان
                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="link">
                                    <div className="section__box p-0 pulse-hover wow zoomIn">
                                        <div className="text-center">
                                            <img src={projectImg2} className="img-responsive" alt="هیئت قائمیون" />
                                            <div className="padding-10">
                                                هیئت قائمیون
                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="link">
                                    <div className="section__box p-0 pulse-hover wow zoomIn">
                                        <div className="text-center">
                                            <img src={projectImg3} className="img-responsive" alt="صراط وکتور" />
                                            <div className="padding-10">
                                                صراط وکتور
                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="link">
                                    <div className="section__box p-0 pulse-hover wow zoomIn">
                                        <div className="text-center">
                                            <img src={projectImg5} className="img-responsive" alt="تهران گرافیک" />
                                            <div className="padding-10">
                                                تهران گرافیک
                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectItem;