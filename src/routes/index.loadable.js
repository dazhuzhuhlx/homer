import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import SideSheet from "../components/side-sheet";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ "./home"),
    loading: Loading,
    modules: ["home"],
});
const RecentCourse = Loadable({
    loader: () => import(/* webpackChunkName: "recent-course" */ "./recent-course"),
    loading: Loading,
    modules: ["recent-course"],
});
const StarCourse = Loadable({
    loader: () => import(/* webpackChunkName: "star-course" */ "./star-course"),
    loading: Loading,
    modules: ["star-course"],
});
const CourseCategory = Loadable({
    loader: () => import(/* webpackChunkName: "course-category" */ "./course-category"),
    loading: Loading,
    modules: ["course-category"],
});

const NotFound = () => "Not Found";

export default () => (
    <div className="App">
        <SideSheet />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recent_course" component={RecentCourse} />
            <Route exact path="/star_course" component={StarCourse} />
            <Route exact path="/course_category/:category" component={CourseCategory} />

            <Route component={NotFound} />
        </Switch>
    </div>
);
