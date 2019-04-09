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

const images = [
    i_banner_1,
    i_banner_2,
    i_banner_3,
    i_banner_4,
    i_banner_5
  ];

  assets_6.forEach((asset, index) => {
    asset.image = images[index];
  });

  const asset_obj = assets_6.reduce((result, asset) => {
    if (!result[asset.category]) result[asset.category] = [];
    result[asset.category].push(asset);
    return result;
  }, {});

class RecentCourse extends React.Component {

    goTo = () => {
        
    }

    handler = { goToWxBlog: this.goTo };

    render() {
        const asset_array = asset_obj["nutrition"];
        return (
            <div>
                <img src={i_banner_} alt=""/>
                <CourseList 
                handler={this.handler} 
                asset={asset_array}
                />
                <Footer/>
            </div>
        );
    }
}

export default RecentCourse;


/*
import React from "react";
import Footer from "../../components/footer";
import CourseList from "../../components/course-list";
import i_banner_ from "./IMG/最新课程banner@3x.png";
import i_banner_1 from "./IMG/分类课程-咖喱饭@2x.png";
import i_banner_2 from "./IMG/分类课程-汤圆@2x.png";
import i_banner_3 from "./IMG/分类课程-糖@2x.png";
import i_banner_4 from "./IMG/缺铁分类课程@2x.png";
import i_banner_5 from "./IMG/儿童食品-最新课程@2x.png";
import {data as asset_6} from "./asset_6.json";

const i_banner =[i_banner_1,i_banner_2,i_banner_3,i_banner_4,i_banner_5];

class RecentCourse extends React.Component {

    goTo = () => {
        
    }

    handler = { goToWxBlog: this.goTo };

    render() {
        return (
            <div className="hrf_">
                <img src={i_banner_} alt=""/>

                {asset_6.map(({title,link,author,date},index)=>(
                <CourseList 
                    imgs={i_banner[index]} 
                    handler={this.handler} 
                    title={[title]}
                    bat_2={[link]}
                    bat_3={[author]}
                    hrf_1={[date]}
                />
                ))}
                <Footer/>
            </div>
        );
    }
}

export default RecentCourse; */