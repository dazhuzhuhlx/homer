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
                    i_course1={noudou_1}
                    i_course2={noudou_2}
                    i_course3={noudou_3}
                    i_course4={noudou_4}
                    handler={this.handler}
                    moreHref="/qwer"
                    hrf_1="https://mp.weixin.qq.com/s/ZzvMAVe_-EEdSH-TvtTKow"
                    hrf_2="https://mp.weixin.qq.com/s/kRydlF0lBjKAssMoCa6SSw"
                    hrf_3="https://mp.weixin.qq.com/s/7eahVQb0SmexuOdEpLydvw"
                    hrf_4="https://mp.weixin.qq.com/s/EIujqcyMg6ba0WzrnHFmeA"
                />
                <Course
                    category="recent"
                    i_course1={ktimg_1}
                    i_course2={ktimg_2}
                    i_course3={ktimg_4}
                    i_course4={ktimg_3}
                    i_course5={ktimg_5}
                    handler={this.handler}
                    moreHref="/recent_course"
                    newesta_1="孩子食欲不好怎么办？一起做这道菜吧！"
                    newesta_2="[元宵特辑]儿童怎样吃汤圆更好消化?"
                    newesta_3="孩子缺铁，你有想过是“它”的原因吗？"
                    newesta_4="孩子长不高,竟因吃了太多糖？！"
                    newesta_5="儿童食品更符合孩子需要吗？"
                    hrf_1="https://mp.weixin.qq.com/s/Tnqff9PcBFfT9ojf0KP5CA"
                    hrf_2="https://mp.weixin.qq.com/s/DqyL7tsOBINvO87MkWIqbg"
                    hrf_3="https://mp.weixin.qq.com/s/kRydlF0lBjKAssMoCa6SSw"
                    hrf_4="https://mp.weixin.qq.com/s/ZzvMAVe_-EEdSH-TvtTKow"
                    hrf_5="https://mp.weixin.qq.com/s/7eahVQb0SmexuOdEpLydvw"
                />
                <Footer />
            </div>
        );
    }
}
