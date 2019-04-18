import React, { Component } from "react";
import courseBase from "../../components/course-base";

const star_courses = courseBase("/star_course", "/");
export default class Banner extends Component {
    render() {
        return (
            <div>
                {star_courses.map(({ id, link, image_url }) => (
                    <div className="mater" key={id}>
                        <div className="gap" />
                        <div className="imga">
                            <a href={link}>
                                <img alt="Banner Zone" src={image_url} />
                            </a>
                        </div>
                    </div>
                ))}
                <div className="layer-footer foter">&copy; 2019 Powered By 基因家&reg;</div>
            </div>
        );
    }
}
