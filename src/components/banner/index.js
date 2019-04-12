import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import i_banner_1 from "./IMG/lb.png";
import i_banner_2 from "./IMG/关注儿童营养banner@2x.png";
import { data as assets } from "./asset.json";

const images = [i_banner_1, i_banner_2];

export default class Banner extends Component {
  render() {
    return (
      <Carousel>
        {assets.map(({ url, alt, id }, index) => (
          <Carousel.Item key={id}>
            <a href={url}>
              <img className="d-block w-100" src={images[index]} alt={alt} />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
