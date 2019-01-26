import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class Bg extends Component {
    render() {
        return (
            <div className="bg">
                <ReactWOW animation='zoomIn'>
                    <div className="bg__title">طراحی خلاقاته و رسپانیسو سایت خود را به ما بسپارید </div>
                    <div className="bg__desc">
                    سایت ریسپانسیو (Responsive) یا واکنش گرا، وب سایتی است که در مرورگر های دیوایس های مختلف مانند لپتاپ ، گوشی های موبایل و … شکل و قالب خود را حفظ کند. با گسترش دنیای اینترنت و گوشی های هوشمند و تبلت ها ، تکنیک طراحی سایت ریسپانسیو اهمیت بسیاری پیدا کرد
        </div>
                </ReactWOW>

            </div>
        );
    }
}

export default Bg;