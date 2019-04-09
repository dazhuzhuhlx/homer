import React from "react";
import Footer from "../../components/footer";
import CourseList from "../../components/course-list";

import { data as assets_5 } from "./asset_5.json";

import i_banner_ from "./IMG/最新课程banner@3x.png";
import i_banner_1 from "./IMG/分类课程-糖@2x.png";
import i_banner_2 from "./IMG/分类课程-咖喱饭@3x.png";
import i_banner_3 from "./IMG/分类课程-汤圆@2x.png";
import i_banner_4 from "./IMG/分类课程-妈咪必备@2x.png";
import i_banner_5 from "./IMG/分类课程-月饼@3x.png";
import i_banner_6 from "./IMG/分类-身高@2x.png";
import i_banner_7 from "./IMG/儿童食品-最新课程@2x.png";

const images = [
  i_banner_7,
  i_banner_2,
  i_banner_3,
  i_banner_4,
  i_banner_5,
  i_banner_6,
  i_banner_1
];

assets_5.forEach((asset, index) => {
  asset.image = images[index];
});

const asset_obj = assets_5.reduce((result, asset) => {
  if (!result[asset.category]) result[asset.category] = [];
  result[asset.category].push(asset);
  return result;
}, {});

class CourseCategory extends React.Component {
  handler = { goToWxBlog: this.goTo };

  render() {
    const { category } = this.props.match.params;


    const asset_array = asset_obj[category];

    return (
      <div>
        <img src={i_banner_} alt="" />
        <CourseList
          handler={this.handler}
          asset={asset_array}
        />
        <Footer />
      </div>
    );
  }
}

export default CourseCategory;
