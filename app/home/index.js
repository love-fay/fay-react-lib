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
/**
 * Created by feichongzheng on 17/10/13.
 */
var React = __importStar(require("react"));
var loadable_1 = __importDefault(require("../../lib/loadable"));
// @ts-ignore
exports.default = (function (props) { return <loadable_1.default loader={{
    view: function () { return Promise.resolve().then(function () { return __importStar(require(/* webpackChunkName: "FayReactMaterialUiHome" */ './views')); }); }
}} props={props}/>; });
//# sourceMappingURL=index.js.map