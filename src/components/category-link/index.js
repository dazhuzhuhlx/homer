import React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";

import not_1 from "./IMG/icon-生理问题@3x.png";
import not_2 from "./IMG/icon-食物介绍@2x.png";
import not_3 from "./IMG/icon-生活习惯@2x.png";
import not_4 from "./IMG/icon-基因揭秘@2x.png";

const category = [
    { name: "食物营养", name_en: "nutrition", brand: not_2 },
    { name: "营养基因", name_en: "food_intr", brand: not_4 },
    { name: "生活习惯", name_en: "habit", brand: not_3 },
    { name: "健康问题", name_en: "faq", brand: not_1 },
];

export default React.memo(({ handler }) => (
    <Row className="layer layer-category">
        {category.map(({ name, name_en, brand }) => (
            <Col xs={3} key={name_en}>
                <Button 
                    variant="link"
                    onClick={handler.go}
                    data-href={`/course_category/${name_en}`}>
                    {<div className="homesy"><img src={brand} alt="" /></div>}
                    <p>{name}</p>
                </Button>
            </Col>
        ))}
    </Row>
));
