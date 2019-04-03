import React, { Component } from "react";
import Carousel from "react-bootstrap/lib/Carousel";

import i_banner_1 from "./IMG/lb.png";
import i_banner_2 from "./IMG/关注儿童营养banner@2x.png";

export default class Banner extends Component{
    render() {
        return (
             <Carousel>
            <Carousel.Item>
                <a href="https://mp.weixin.qq.com/s/K1nyuUZr1WQQUDZ95rIfTA"><img
                className="d-block w-100"
                src={i_banner_1}
                alt="First slide"
                /></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://mp.weixin.qq.com/s/rYlRHY48t8R9SK9nAkZUOA"><img
                className="d-block w-100"
                src={i_banner_2}
                alt="Third slide"
                /></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://mp.weixin.qq.com/s/rYlRHY48t8R9SK9nAkZUOA"><img
                className="d-block w-100"
                src={i_banner_2}
                alt="Third slide"
                /></a>
            </Carousel.Item>
            </Carousel>


        );
    }
    
}
