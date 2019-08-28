"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
require("./style/index.scss");
var home_1 = __importDefault(require("../home"));
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
//# sourceMappingURL=index.js.map