import React from "react";
import Footer from "../../components/footer";
import CourseList from "../../components/course-list";

import courseBase from "../../components/course-base";
import imageByUrl from "../../components/course-base/image-by-url";

class CourseCategory extends React.Component {
    handler = { goToWxBlog: this.goTo };

    render() {
        const { category } = this.props.match.params;

        const asset = courseBase("/course_category", `/${category}`);
        const i_banner = imageByUrl("/recent_course", "@banner", 0);

        return (
            <div>
                <img src={i_banner} alt="" />
                <CourseList handler={this.handler} asset={asset} />
                <Footer />
            </div>
        );
    }
}

export default CourseCategory;
