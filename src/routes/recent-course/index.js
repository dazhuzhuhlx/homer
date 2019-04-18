import React from "react";
import Footer from "../../components/footer";
import CourseList from "../../components/course-list";
import courseBase from "../../components/course-base";
import imageByUrl from '../../components/course-base/image-by-url';

const recent_courses = courseBase("/recent_course", "/");
const i_banner = imageByUrl("/recent_course", "@banner", 0);

class RecentCourse extends React.Component {
    goTo = () => {};

    handler = { goToWxBlog: this.goTo };

    render() {
        return (
            <div>
                <img src={i_banner} alt="" />
                <CourseList handler={this.handler} asset={recent_courses} />
                <Footer />
            </div>
        );
    }
}

export default RecentCourse;
