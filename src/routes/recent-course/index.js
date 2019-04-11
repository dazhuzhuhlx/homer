import React from "react";
import Footer from "../../components/footer";
import CourseList from "../../components/course-list";
import i_banner_ from "./IMG/最新课程banner@3x.png";
import i_banner_1 from "./IMG/分类课程-咖喱饭@2x.png";
import i_banner_2 from "./IMG/分类课程-汤圆@2x.png";
import i_banner_3 from "./IMG/分类课程-糖@2x.png";
import i_banner_4 from "./IMG/缺铁分类课程@2x.png";
import i_banner_5 from "./IMG/儿童食品-最新课程@2x.png";
import { data as assets_6 } from "./asset_6.json";

const images = [i_banner_1, i_banner_2, i_banner_3, i_banner_4, i_banner_5];

assets_6.forEach((asset, index) => {
  asset.image = images[index];
});

class RecentCourse extends React.Component {
  goTo = () => {};

  handler = { goToWxBlog: this.goTo };

  render() {
    return (
      <div>
        <img src={i_banner_} alt="" />
        <CourseList handler={this.handler} asset={assets_6} />
        <Footer />
      </div>
    );
  }
}

export default RecentCourse;
