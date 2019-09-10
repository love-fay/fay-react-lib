"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var home_1 = require("../home");
require("./style/index.scss");
var Root = function (props) {
    var pathname = props.location.pathname;
    var pathPrefix = pathname.split('/')[1];
    var router = {
        '': <home_1.default />,
    };
    return (<div style={{ height: '100%' }}>
      {router[pathPrefix]}
    </div>);
};
exports.default = react_router_dom_1.withRouter(Root);
