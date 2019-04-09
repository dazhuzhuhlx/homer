import React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Icon from "../../components/icon";

export default React.memo(({ handler,asset}) => (
    <div className="course-list">
      {asset.map((asset) => (
            <a href={asset.link} className="a_liks">
            <Row onClick={handler.goToWxBlog} className="course_bahg">
                <Col xs={4}>
                    <img alt="course-thumbnail" src={asset.image} className="ig"/>
                </Col>
                <Col xs={7}>
                    <div className="hrf1">{asset.title}</div>
                </Col>
                <div className="hrf2">{Icon["angle-right"]}</div>
                <div className="course_shio">
                    {asset.author}<div className="course_shio_1"></div>{asset.date}
                </div>
            </Row>
            </a>
          ))}
    </div>
）） ;
/ **/
