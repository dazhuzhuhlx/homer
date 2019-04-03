import React from "react";
import Button from "react-bootstrap/lib/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import cs from "classnames";
import { isGranted } from "../../shared/cookies";
import {debuggor} from '../../shared/debuggor';
import { data as links } from "./links.json";


import ioqqq from "./IMG/profileoh.jpg";
import tag_1 from "./IMG/tag_1.png";
import tag_2 from "./IMG/tag_2.png";
import tag_5 from "./IMG/tag_5.png";


const link = links.reduce(
    (result, { to, show_header = true }) => Object.assign(result, { [to]: show_header }),
    {}
);

const isCurrent = (to, current) =>
    to === "/" ? current === to : `${current}/`.startsWith(`${to}/`);

const isShowHeader = (pathname = "/") => {
    const parent_path = "/" + (pathname.split("/")[1] || "");
    debuggor(parent_path, link[parent_path]);
    return link[parent_path];
};

const Nav = React.memo(({ location: { pathname: current } }) => {
    if (!isShowHeader(current)) return null;

    const _links = links.map(
        ({ to, text }, index) =>
            isGranted(to) ? (
                <Link to={to} key={index} className={cs({ current: isCurrent(to, current) })}>
                    <span className="block">{text}</span>
                </Link>
            ) : null
    );

    return (<React.Fragment>
        <div className="amginlll">
            <div classNamw="headser">
                <img src={ioqqq} alt=""/>
            </div>
        </div>
        <div className="bton">
            <Button variant="light">
                <div>
                    <div><img src={tag_1} alt=""/></div>
                    <div><span>明星课堂</span></div>
                </div>
            </Button>
            <Button variant="light">
                <div>
                    <div><img src={tag_2} alt=""/></div>
                    <div><span>自测工具</span></div>
                </div>
            </Button>
            <Button variant="light">
                <div>
                    <div><img src={tag_5} alt=""/></div>
                    <div><span>VIP服务</span></div>
                </div>
            </Button>
        </div>

            {_links}
        </React.Fragment>);
});

export default withRouter(Nav);
