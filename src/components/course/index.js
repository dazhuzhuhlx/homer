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

export default React.memo(({hrf_1,hrf_2,hrf_3,hrf_4,hrf_5,newesta_1,newesta_2,newesta_3,newesta_4,newesta_5,i_course1,i_course2,i_course3,i_course4,i_course5,category = "star", handler = defaultHandler, moreHref = "/"}) => (
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
            <div>
                <div className="header_qw">
                    <a href={hrf_1}>
                        <img src={i_course1} alt=""/>
                    </a>
                    <div className="header_titlele"><div className="header_wiht">{newesta_1}</div></div>
                </div>
                <div className="qw">
                    <a href={hrf_2}>
                        <img src={i_course2} alt=""/>
                    </a>
                    <div className="header_titlele"><div className="header_wiht">{newesta_2}</div></div>
                </div>
                <div className="qw">
                    <a href={hrf_3}>
                        <img src={i_course3} alt=""/>
                    </a>
                    <div className="header_titlele"><div className="header_wiht">{newesta_3}</div></div>
                </div>
                <div className="qw">
                    <a href={hrf_4}>
                        <img src={i_course4} alt=""/>
                    </a>
                    <div className="header_titlele"><div className="header_wiht">{newesta_4}</div></div>
                </div>
                <div className="qw">
                    <a href={hrf_5}>
                        <img src={i_course5} alt=""/>
                    </a>
                    <div className="header_titlele"><div className="header_wiht">{newesta_5}</div></div>
                </div>
            </div>
        </div>
    </div>
));
