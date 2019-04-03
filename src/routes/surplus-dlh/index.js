import React, { Component } from "react";
import zootl_1 from "./IMG/明星课程查看更多-儿童食品@3x.png";
import zootl_3 from "./IMG/明星课程查看更多-缺铁@2x.png";
import zootl_2 from "./IMG/明星课程查看更多-糖@2x.png";
import zootl_4 from "./IMG/明星课程查看更多-果汁@2x.png";

export default class Banner extends Component{
   render() {
       return (
         <div>
         <div className="mater">
            <div className="gap"></div>
            <div className="imga"> 
               <a href="https://mp.weixin.qq.com/s/EIujqcyMg6ba0WzrnHFmeA">
               <img alt="Banner Zone" src={zootl_4} /></a>
            </div>
         </div>
         <div className="mater">
            <div className="gap"></div>
            <div className="imga"> 
               <a href="https://mp.weixin.qq.com/s/kRydlF0lBjKAssMoCa6SSw">
               <img alt="Banner Zone" src={zootl_3} /></a>
            </div>
         </div>
         <div className="toset"></div>
         <div className="mater">
            <div className="gap"></div>
            <div className="imga"> 
               <a href="https://mp.weixin.qq.com/s/ZzvMAVe_-EEdSH-TvtTKow">
               <img alt="Banner Zone" src={zootl_2} /></a>
            </div>
         </div>
         <div className="mater">
            <div className="gap"></div>
            <div className="imga"> 
               <a href="https://mp.weixin.qq.com/s/7eahVQb0SmexuOdEpLydvw">
               <img alt="Banner Zone" src={zootl_1} /></a>
            </div>
         </div>
         <div className="layer-footer foter">&copy; 2019 Powered By 基因家&reg;</div>
      </div>
       );
   }
}
