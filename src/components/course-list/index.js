import React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Icon from "../../components/icon";

export default React.memo(({ imgs, handler,bat_1,hrf_1 }) => (
    <div class="course-list">
        {imgs.map((img, index) => (
            <a href={hrf_1[index]} key={index} class="a_liks">
            <Row onClick={handler.goToWxBlog} className="course_bahg">
                <Col xs={4}>
                    <img alt="course-thumbnail" src={img} className="ig"/>
                </Col>
                <Col xs={7}>
                    <div className="hrf1">{bat_1[index]}</div>
                </Col>
                <div className="hrf2">{Icon["angle-right"]}</div>
            </Row>
            </a>
        ))

        }
    </div>
));


/*import React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Icon from "../../components/icon";

export default React.memo(({ imgs, handler,bat_1,bat_2,bat_3,hrf_1 }) => (
    <div className="course-list">
            <a href={hrf_1} className="a_liks">
            <Row onClick={handler.goToWxBlog} className="course_bahg">
                <Col xs={4}>
                    <img alt="course-thumbnail" src={imgs} className="ig"/>
                </Col>
                <Col xs={7}>
                    <div className="hrf1">{bat_1}</div>
                </Col>
                <div className="hrf2">{Icon["angle-right"]}</div>
                <div className="course_shio">
                    {bat_2}<div className="course_shio_1"></div>{bat_3}
                </div>
            </Row>
            </a>
    </div>
));*/
