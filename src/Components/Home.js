import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>صفحه اصلی</h1>
                <Header />
                <button className="btn btn-success">click</button>
                <i className="fa fa-times"></i>
            </div>
        );
    }
}

export default Home;