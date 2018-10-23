import React, { Component } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import './ImageSlider.css'

class ImageSlider extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div>
         <img src="../food1.jpg"/>
        </div>
        <div>
        <img src="../food1.jpg"/>
        </div>
        {/* <div>
        <img src="../food1.jpg"/>
        </div> */}
        <div>
        <img src="../food1.jpg"/>
        </div>
      </Carousel>
    );
  }
}
export default ImageSlider;
