import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Icon from "../icon";

const course = {
  star: "明星",
  recent: "最新"
};

const defaultHandler = { go: () => console.log("No Action Bound For Click") };

export default React.memo(
  ({ asset, category = "star", handler = defaultHandler, moreHref = "/" }) => (
    <div className="layer layer-course">
      <Row className="title">
        <Col xs={{ span: 3 }}>{course[category]}课程</Col>
        <Col xs={{ span: 3, offset: 6 }}>
          <Button variant="link" onClick={handler.go} data-href={moreHref}>
            查看更多&nbsp;
            {Icon["angle-right"]}
          </Button>
        </Col>
      </Row>
      <div className="content">
        {asset.map(asset => (
          <div key={asset.hrf_}>
            <div className="header_qw">
              <a href={asset.hrf_} className="a_liks">
                <img src={asset.star_course_image} alt="" />
              </a>
              <div className="header_titlele">
                <div className="header_wiht">{asset.newesta_}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> ///
  )
);
