import React, { Component } from 'react';
import Header1 from './Header1';
import GalleryItem from './GalleryItem';
import Footer from './Footer';

export default class Gallery extends Component {    
  render() {
    return (
      <div>
        <Header1 icon="pe-7s-camera">گالری عکس - مهدی مبین حسنی </Header1>
        <GalleryItem />
        <Footer />
      </div>
    )
  }
}
