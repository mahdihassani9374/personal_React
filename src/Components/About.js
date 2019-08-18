import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class About extends Component {
    state = {
        user : [
            {name:'مهدی حسنی ',title:'برنامه نویس سمت کلاینت',desc:'ui developer',skile : [
                {name:'html5',range:'90%'},
                {name:'css3',range:'80%'},
                {name:'javascript',range:'70%'},
                {name:'react',range:'60%'},
                {name:'seo',range:'60%'},
                {name:'react-native',range:'50%'},
                {name:'vue js',range:'40%'},
            ]},
            {name:'مبین حسنی ',title:'برنامه نویس سمت سرور',desc:'back end developer',skile : [
                {name:'c#',range:'90%'},
                {name:'.net core ',range:'80%'},
                {name:'mvc  ',range:'80%'},
                {name:'ef core ',range:'80%'},
                {name:'xamarin',range:'60%'},
                {name:'mobgo DB',range:'50%'},
            ]}
        ]
    }
    render() {
        return (
            <section className="section">
                <div className="">
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
                <div className="">
                    <div className="about">
                        {
                            this.state.user.map((item,index)=>
                                <div className="col-md-6 col-xs-12 col-sm-12 p-40" key={index}>
                                    <div className="about__title">{item.name}</div>
                                    <div className="about__desc">{item.title}</div>
                                    <div className="about__desc">{item.desc}</div>
                                    <div className="seperator"></div>
                                    {
                                        item.skile.map((skile,index)=>
                                            <div key={index}>
                                                 <div className="about__desc">{skile.name}</div>
                                                 <div className="progress">
                                                    <ReactWOW animation='bounceInRight'>
                                                        <div className="progress-bar progress-bar-success" role="progressbar"
                                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: skile.range }}>
                                                            {skile.range}
                                                        </div>
                                                    </ReactWOW>
                                                </div>
                                            </div>
                                        )
                                    }
                            </div> 
                        )}                      
                    </div>
                </div>
            </section>
        );
    }
}

export default About;