import React, { Component } from 'react';
import img from '../docs/images/profile.jpg';
import img1 from '../docs/images/profile1.jpg';
import img2 from '../docs/images/profile2.jpg';
import img3 from '../docs/images/4.jpg';
import img4 from '../docs/images/5.jpg';
import img5 from '../docs/images/6.jpg';
import img6 from '../docs/images/7.jpg';
import img7 from '../docs/images/8.JPG';
import ReactWOW from 'react-wow'


export default class GalleryItem extends Component {
    state = {
        gallery : [img,img1,img2,img3,img4,img5,img6,img7]
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
