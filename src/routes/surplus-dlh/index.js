import React, { Component } from "react";
import stars_1 from "./IMG/明星课程查看更多-儿童食品@3x.png";
import stars_2 from "./IMG/明星课程查看更多-缺铁@2x.png";
import stars_3 from "./IMG/明星课程查看更多-糖@2x.png";
import stars_4 from "./IMG/明星课程查看更多-果汁@2x.png";
import { data as asset_8 } from "./asset_8.json";

const stars = [stars_1, stars_2, stars_3, stars_4];

export default class Banner extends Component {
  render() {
    return (
      <div>
        {asset_8.map(({ hrf_ }, index) => (
          <div className="mater" key={hrf_}>
            <div className="gap" />
            <div className="imga">
              <a href={hrf_}>
                <img alt="Banner Zone" src={stars[index]} />
              </a>
            </div>
          </div>
        ))}
        <div className="layer-footer foter">
          &copy; 2019 Powered By 基因家&reg;
        </div>
      </div>
    );
  }
}
