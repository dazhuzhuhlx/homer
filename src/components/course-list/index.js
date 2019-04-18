import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "../../components/icon";

export default React.memo(({ handler, asset }) => (
    <div className="course-list">
        {asset.map(({ id, link, title, author, image_url, publish_at }) => (
            <a href={link} className="a_liks" key={title}>
                <Row onClick={handler.goToWxBlog} className="course_bahg">
                    <Col xs={4}>
                        <img alt="course-thumbnail" src={image_url} className="ig" />
                    </Col>
                    <Col xs={7}>
                        <div className="hrf1">{title}</div>
                    </Col>
                    <div className="hrf2">{Icon["angle-right"]}</div>
                    <div className="course_shio">
                        {author}
                        <div className="course_shio_1" />
                        {publish_at}
                    </div>
                </Row>
            </a>
        ))}
    </div>
));
