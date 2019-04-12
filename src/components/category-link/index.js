import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import not_1 from "./IMG/icon-生理问题@3x.png";
import not_2 from "./IMG/icon-食物介绍@2x.png";
import not_3 from "./IMG/icon-生活习惯@2x.png";
import not_4 from "./IMG/icon-基因揭秘@2x.png";
import {data as asset_2} from "./asset_2.json"

const category = [ not_2 , not_4 , not_3 , not_1 ];

export default React.memo(({ handler }) => (
    <Row className="layer layer-category">
        {asset_2.map(({ name, name_en },index) => (
            <Col xs={3} key={name_en}>
                <Button 
                    variant="link"
                    onClick={handler.go}
                    data-href={`/course_category/${name_en}`}>
                    {<div className="homesy"><img src={category[index]} alt="" /></div>}
                    <p>{name}</p>
                </Button>
            </Col>
        ))}
    </Row>
));
