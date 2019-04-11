import React from "react";
import NavHeader from "../../components/nav-header";
import Banner from "../../components/banner";
import CategoryLink from "../../components/category-link";
import Course from "../../components/course";
import Footer from "../../components/footer";
import noudou_1 from "./IMG/糖课程@2x.png";
import noudou_2 from "./IMG/铁课程@3x.png";
import noudou_3 from "./IMG/儿童食品@2x.png";
import noudou_4 from "./IMG/果汁课程@3x.png";
import ktimg_1 from "./IMG/首页-最新课程-咖喱饭@3x.png";
import ktimg_2 from "./IMG/首页-最新课程-汤圆@2x.png";
import ktimg_3 from "./IMG/首页-最新课程-糖@3x.png";
import ktimg_4 from "./IMG/缺铁-首页-02@3x.png";
import ktimg_5 from "./IMG/儿童食品-最新课程@3x.png";
import { data as assets_3 } from "./asset_3.json";
import { data as assets_4 } from "./asset_4.json";

const star_course_images = [noudou_1, noudou_2, noudou_3, noudou_4];
assets_4.forEach((asset, index) => {
  asset.star_course_image = star_course_images[index];
});
// const asset_obj = assets_4.reduce((result, asset) => {
// if (!result[asset.category]) result[asset.category] = [];
// result[asset.category].push(asset);
// return result;
// }, {});

const star_ktimg_images = [ktimg_1, ktimg_2, ktimg_3, ktimg_4, ktimg_5];

assets_3.forEach((asset, index) => {
  asset.star_course_image = star_ktimg_images[index];
});

// const asset_obj2 = assets_3.reduce((result, asset) => {
// if (!result[asset.category]) result[asset.category] = [];
// result[asset.category].push(asset);
// return result;
// }, {});

/*asset_1.forEach((foo, index) => {
    foo.image = star_course_images[index];  
}) */

export default class Home extends React.Component {
  goTo = ({
    currentTarget: {
      dataset: { href }
    }
  }) => {
    this.props.history.push(href);
  };

  handler = { go: this.goTo };
  render() {
    // const asset_array = asset_obj["nutrition"];
    // const asset_array2 = asset_obj2["nutrition"];
    return (
      <div>
        <NavHeader />
        <Banner />
        <CategoryLink handler={this.handler} />
        <Course
          handler={this.handler}
          asset={assets_4}
          category="star"
          moreHref="/qwer"
          />
        <Course
          handler={this.handler}
          asset={assets_3}
          category="recent"
          moreHref="/recent_course"
        />
        <Footer />
      </div>
    );
  }
}
