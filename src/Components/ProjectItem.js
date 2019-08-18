import React, { Component } from 'react';
import projectImg4 from '../docs/images/project4.png';
import projectImg1 from '../docs/images/project1.png';
import projectImg2 from '../docs/images/project2.png';
import projectImg3 from '../docs/images/project3.png';
import projectImg5 from '../docs/images/project5.png';
import projectImg6 from '../docs/images/hyva.png';
import projectImg7 from '../docs/images/kannon.png';
import application from '../docs/images/application.png';
import application1 from '../docs/images/application1.png';
import application2 from '../docs/images/application2.png';
import ReactWOW from 'react-wow'

class ProjectItem extends Component {
    state = {
        projects: [
            { name: 'هیوا پرواز (درحال پیاده سازی)', img: projectImg6 ,link:'http://hyva.ferdows110.ir' },
            { name: 'آستان قدس رضوی منطقه ۱۸ تهران', img: projectImg7 ,link:'http://kanoon.ferdows110.ir' },
            { name: 'اکانت گیم', img: projectImg4 ,link:'http://accountgame.ir'},           
            { name: 'هیئت قائمیون', img: projectImg2  ,link:'http://ferdows110.ir'},
            { name: 'صراط وکتور', img: projectImg3 ,link:'http://seratvector.ir' },
            { name: 'تهران گرافیک', img: projectImg5 ,link:'http://tehran-graphic.ir' },
            { name: 'ایمن صنعت پارسیان', img: projectImg1 ,link:'http://imensanaateparsian.ir' },           
        ],
        android:[
            {name:'اپلیکیشن هیئت قائمیون'  , img:[application , application1 , application2] , link:'http://s9.picofile.com/file/8366729968/qaemioun_app.apk.html'}
        ]
    }
    render() {
        return (
            <section className="section">
                <div className="">
                    <div className="container">
                        <ReactWOW animation='zoomIn'>
                            <div className="section__title">پروژه ها</div>
                        </ReactWOW>
                        <ReactWOW animation='zoomIn'>
                            <div className="section__subtitle">پروژه های انجام شده ما تحت وب</div>
                        </ReactWOW>
                        <ReactWOW animation='zoomIn'>
                            <div className="section__desc">
                               در این قسمت می توانید نمونه کارهای تحب وب مارا مشاهده کنید 
                            </div>
                        </ReactWOW>
                        <div className="mt-80 mb-40 flex">
                            {
                                this.state.projects.map((item,index)=>
                                    <ReactWOW animation='zoomIn' key={index}>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <a target='_blank' href={item.link} className="link">
                                                <div className="section__box p-0 pulse-hover">
                                                    <div className="text-center">
                                                        <img src={item.img} className="img-responsive" alt={item.name} />
                                                        <div className="padding-10">
                                                           {
                                                               item.name
                                                           }
                                            </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </ReactWOW>
                            )
                       }
                        </div>
                        <ReactWOW animation='zoomIn'>
                            <div className="section__subtitle">پروژه های انجام شده اندرویدی (اپلیکیشن) </div>
                        </ReactWOW>
                        <ReactWOW animation='zoomIn'>
                            <div className="section__desc">
                               در این قسمت می توانید نمونه کارهای تحب اندروید  مارا مشاهده کنید 
                            </div>
                        </ReactWOW>
                        <div className="mt-80 mb-40 flex">
                            {
                                this.state.android.map((item,index)=>
                                    <ReactWOW animation='' key={index}>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <a target='_blank' href={item.link} className="link">
                                                <div className="p-0 pulse-hover">
                                                    <div className="text-center">
                                                        {
                                                            item.img.map((img,ind)=>
                                                                <img src={img} key={ind} className="img-app"  alt={item.name} />
                                                            )
                                                        }                                                
                                                    </div>
                                                </div>
                                                <div className="padding-10 text-center margin-top-20">
                                                    {
                                                        item.name
                                                    }
                                                </div>
                                            </a>
                                        </div>
                                    </ReactWOW>
                            )
                       }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectItem;