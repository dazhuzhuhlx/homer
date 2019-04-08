import React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Icon from "../icon";

const course = {
    star: "明星",
    recent: "最新"
};

const defaultHandler = { go: () => console.log("No Action Bound For Click") };

export default React.memo(({i_course1,newesta_1,hrf_1, category = "star", handler = defaultHandler, moreHref = "/"}) => (
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
        {i_course1.map((img, index) => (
            <div>
                <div className="header_qw">
                    <a href={hrf_1[index]} key={index} class="a_liks">
                        <img src={img} alt=""/>
                    </a>
                    <div className="header_titlele"><div className="header_wiht" key={index}>{newesta_1[index]}</div>
                </div>
            </div>
        </div>
        ))}
    </div>
    </div>
));
