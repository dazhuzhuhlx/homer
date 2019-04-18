import React from "react";
import NavHeader from "../../components/nav-header";
import Banner from "../../components/banner";
import CategoryLink from "../../components/category-link";
import Course from "../../components/course";
import Footer from "../../components/footer";

import courseBase from "../../components/course-base";

const star_courses = courseBase("/", "@明星课程").slice(0, 5);
const recent_courses = courseBase("/", "@最新课程").slice(0, 5);
const banners = courseBase("/", "@banner").slice(0, 2);

export default class Home extends React.Component {
    goTo = ({
        currentTarget: {
            dataset: { href },
        },
    }) => {
        this.props.history.push(href);
    };

    handler = { go: this.goTo };
    render() {
        return (
            <div>
                <NavHeader />
                <Banner asset={banners} />
                <CategoryLink handler={this.handler} />
                <Course
                    handler={this.handler}
                    asset={star_courses}
                    category="star"
                    moreHref="/star_course"
                />
                <Course
                    handler={this.handler}
                    asset={recent_courses}
                    category="recent"
                    moreHref="/recent_course"
                />
                <Footer />
            </div>
        );
    }
}
