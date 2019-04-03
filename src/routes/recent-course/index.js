import React from "react";
import Footer from "../../components/footer";
import CourseList from "../../components/course-list";

import i_banner_ from "./IMG/最新课程banner@3x.png";
import i_banner_1 from "./IMG/分类课程-咖喱饭@2x.png";
import i_banner_2 from "./IMG/分类课程-汤圆@2x.png";
import i_banner_3 from "./IMG/分类课程-糖@2x.png";
import i_banner_4 from "./IMG/缺铁分类课程@2x.png";
import i_banner_5 from "./IMG/儿童食品-最新课程@2x.png";

class RecentCourse extends React.Component {

    goTo = () => {
        
    }

    handler = { goToWxBlog: this.goTo };

    render() {
        return (
            <div className="hrf_">
                <img src={[i_banner_]} alt=""/>
                <CourseList 
                imgs={[i_banner_1]} 
                handler={this.handler} 
                bat_1={["孩子食欲不好怎么办?周末和孩子一起做这道菜吧！"]}
                bat_2={["基因家"]}
                bat_3={["2019年3月1日"]}
                hrf_1={["https://mp.weixin.qq.com/s/Tnqff9PcBFfT9ojf0KP5CA"]}
                />
                <CourseList 
                imgs={[i_banner_2]} 
                handler={this.handler} 
                bat_1={["[元宵特辑]儿童怎样吃汤圆更好消化？"]}
                bat_2={["一天营养师"]}
                bat_3={["2019年2月18日"]}
                hrf_1={["https://mp.weixin.qq.com/s/DqyL7tsOBINvO87MkWIqbg"]}
                />
                <CourseList 
                imgs={[i_banner_4]} 
                handler={this.handler} 
                bat_1={["孩子缺铁，你有想过是“它”的原因吗？"]}
                bat_2={["一天营养师"]}
                bat_3={["2019年1月29日"]}
                hrf_1={["https://mp.weixin.qq.com/s/kRydlF0lBjKAssMoCa6SSw"]}
                />
                <CourseList 
                imgs={[i_banner_3]} 
                handler={this.handler} 
                bat_1={["孩子长不高，竟是因为吃多了糖？！"]}
                bat_2={["一丁营养师"]}
                bat_3={["2019年1月15日"]}
                hrf_1={["https://mp.weixin.qq.com/s/ZzvMAVe_-EEdSH-TvtTKow"]}
                />
                <CourseList 
                imgs={[i_banner_5]} 
                handler={this.handler} 
                bat_1={["儿童食品更符合孩子需要吗？"]}
                bat_2={["基因家"]}
                bat_3={["2018年12月18日"]}
                hrf_1={["https://mp.weixin.qq.com/s/7eahVQb0SmexuOdEpLydvw"]}
                />
                <Footer/>
            </div>
        );
    }
}

export default RecentCourse;