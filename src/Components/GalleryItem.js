import React, { Component } from 'react';
import img from '../docs/images/profile.jpg';
import ReactWOW from 'react-wow'


export default class GalleryItem extends Component {
    state = {
        gallery : [1,2,3,4,5,6,7,8]
    }
    render() {
        return (
        <div className="container">
            <div className="row gallery">
                {
                    this.state.gallery.map((item,index)=>
                        <ReactWOW animation='zoomIn'  key={index}>
                              <div className="col-md-3 col-xs-6 col-sm-3">
                                <img src={img} className="img-responsive img-thumbnail img-gallery" alt="مهدی و مبین حسنی " />
                            </div>
                        </ReactWOW>                      
                    )
                }
            </div>
        </div>
        )
    }
}
