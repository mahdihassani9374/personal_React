import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class Bg extends Component {
    render() {
        return (
            <div className="bg">
                <ReactWOW animation='zoomIn'>
                    <div className="bg__title">ما عاشق برنامه نویسی ایم </div>
                    <div className="bg__desc">
                    هر كسي مي‌تواند كدي بنويسد كه يك كامپيوتر آن‌را درك كند. يك برنامه نويس خوب كدي را مي‌نويسد كه براي ساير همكارانش قابل درك باشد
        </div>
                </ReactWOW>

            </div>
        );
    }
}

export default Bg;