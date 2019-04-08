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

const star_course_images = [noudou_1, noudou_2, noudou_3, noudou_4];
const newesta_1 = ["","","",""]; 
const hrf1 = ["https://mp.weixin.qq.com/s/ZzvMAVe_-EEdSH-TvtTKow","https://mp.weixin.qq.com/s/kRydlF0lBjKAssMoCa6SSw","https://mp.weixin.qq.com/s/7eahVQb0SmexuOdEpLydvw","https://mp.weixin.qq.com/s/EIujqcyMg6ba0WzrnHFmeA"];

const star_ktimg_images = [ktimg_1, ktimg_2, ktimg_3, ktimg_4, ktimg_5];
const newesta_ = ["孩子食欲不好怎么办？一起做这道菜吧！","[元宵特辑]儿童怎样吃汤圆更好消化?","孩子缺铁，你有想过是“它”的原因吗？","孩子长不高,竟因吃了太多糖？！","儿童食品更符合孩子需要吗？"]; 
const hrf2 = ["https://mp.weixin.qq.com/s/Tnqff9PcBFfT9ojf0KP5CA","https://mp.weixin.qq.com/s/DqyL7tsOBINvO87MkWIqbg","https://mp.weixin.qq.com/s/kRydlF0lBjKAssMoCa6SSw","https://mp.weixin.qq.com/s/ZzvMAVe_-EEdSH-TvtTKow","https://mp.weixin.qq.com/s/7eahVQb0SmexuOdEpLydvw"]

/*asset_1.forEach((foo, index) => {
    foo.image = star_course_images[index];
}) */


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
                <Banner/>
                <CategoryLink handler={this.handler} />
                <Course
                    category="star"
                    i_course1={star_course_images}
                    handler={this.handler}
                    moreHref="/qwer"
                    newesta_1={newesta_1}
                    hrf_1={hrf1}
                />
                <Course
                    category="recent"
                    i_course1={star_ktimg_images}
                    handler={this.handler}
                    moreHref="/recent_course"
                    newesta_1={newesta_}
                    hrf_1={hrf2}
                />
                <Footer />
            </div>
        );
    }
}