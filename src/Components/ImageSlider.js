import React, { Component } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import './ImageSlider.css'

class ImageSlider extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    );
  }
}
export default ImageSlider;
