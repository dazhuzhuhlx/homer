import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class Banner extends Component {
    render() {
        const { asset } = this.props;
        return (
            <Carousel>
                {asset.map(({ link, title, image_url, id }) => (
                    <Carousel.Item key={id}>
                        <a href={link}>
                            <img className="d-block w-100" src={image_url} alt={title} />
                        </a>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}
