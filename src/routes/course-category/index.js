import React from "react";
import Footer from "../../components/footer";
import CourseList from "../../components/course-list";
import i_banner_ from "./IMG/最新课程banner@3x.png";
import i_banner_1 from "./IMG/分类课程-糖@2x.png";
import i_banner_2 from "./IMG/分类课程-咖喱饭@3x.png";
import i_banner_3 from "./IMG/分类课程-汤圆@2x.png";
import i_banner_4 from "./IMG/分类课程-妈咪必备@2x.png";
import i_banner_5 from "./IMG/分类课程-月饼@3x.png";
import i_banner_6 from "./IMG/分类-身高@2x.png";
const REMARK_0 = {
    nutrition: ["儿童食品更符合孩子需要吗？","孩子食欲不好怎么办?周末和孩子一起做这道菜吧！","[元宵特辑]儿童怎样吃汤圆更好消化？"],
    food_intr: ["妈咪必备：宝宝的维生素A&D怎么补？","月饼：我和Omega-3有个约会"],
    habit: ["营养师告诉你：如何把握孩子长高的“黄金季”"],
    faq: ["孩子长不高，竟因吃了太多糖？!"],
};
const REMARK_1 = {
    nutrition: [i_banner_1,i_banner_2,i_banner_3],
    food_intr: [i_banner_4,i_banner_5],
    habit: [i_banner_6],
    faq: [i_banner_1],
};
const REMARK_2 = {
    nutrition: ["https://mp.weixin.qq.com/s/7eahVQb0SmexuOdEpLydvw","https://mp.weixin.qq.com/s/Tnqff9PcBFfT9ojf0KP5CA","https://mp.weixin.qq.com/s/DqyL7tsOBINvO87MkWIqbg"],
    food_intr: ["https://mp.weixin.qq.com/s/GUD2P9dAKV0VCBdvopeMBw","https://mp.weixin.qq.com/s/mNhonGvsyoBRuVVN8oa87A"],
    habit: ["https://mp.weixin.qq.com/s/8iS36oZ8pLmzI9UA96SLpQ"],
    faq: ["https://mp.weixin.qq.com/s/ZzvMAVe_-EEdSH-TvtTKow"],
};
const REMARK_3 = {
    nutrition: ["基因家","基因家","一天营养师"],
    food_intr: ["詹詹R.D","Bryan"],
    habit: ["一丁营养师"],
    faq: ["一丁营养师"],
};
const REMARK_4 = {
    nutrition: ["2018年12月18日","2018年3月1日","2018年2月18日"],
    food_intr: ["2018年9月22日","2018年9月26日"],
    habit: ["1周前"],
    faq: ["2018年1月15日"],
};

class CourseCategory extends React.Component {
    state = {};

    goTo = () => {
        
    };

    handlePick = event => {
        event.preventDefault();
        // console.log(event.target.name);
        this.setState({ mark: event.target.name });
    };

    handler = { goToWxBlog: this.goTo };

    render() {
        const { category } = this.props.match.params;


        const remarks_ = REMARK_0[category];
        const remarks_1 = REMARK_1[category];
        const remarks_2 = REMARK_2[category];
        const remarks_3 = REMARK_3[category];
        const remarks_4 = REMARK_4[category];

        console.log("%o", { remarks_, remarks_1, remarks_2 });
        return (
            <div>
                <img src={i_banner_} alt=""/>
                {/* {remarks_1.slice(0, 4).map((remks_1, index) => (
                    <div key={index}> */}
                    <CourseList 
                        imgs={remarks_1} 
                        handler={this.handler}
                        bat_1={remarks_}
                        bat_2={remarks_3}
                        bat_3={remarks_4}
                        hrf_1={remarks_2}
                    />
                    {/* </div>
                ))} */}
                <Footer />
            </div>
        );
    }
}

export default CourseCategory;
