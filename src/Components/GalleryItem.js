import React, { Component } from 'react';
import img from '../docs/images/profile.jpg';
import img1 from '../docs/images/profile1.jpg';
import img2 from '../docs/images/profile2.jpg';
import ReactWOW from 'react-wow'


export default class GalleryItem extends Component {
    state = {
        gallery : [img,img1,img2]
    }
    render() {
        return (
        <div className="container">
            <div className="row gallery">
                {
                    this.state.gallery.map((item,index)=>
                        <ReactWOW animation='zoomIn'  key={index}>
                              <div className="col-md-3 col-xs-6 col-sm-3">
                                <img src={item} className="img-responsive img-thumbnail img-gallery" alt="مهدی و مبین حسنی " />
                            </div>
                        </ReactWOW>                      
                    )
                }
            </div>
        </div>
        )
    }
}
