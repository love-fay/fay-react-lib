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
var react_dom_1 = require("react-dom");
var root_1 = __importDefault(require("./root"));
var provider_1 = __importDefault(require("../lib/provider"));
document.title = 'Fay React Material';
react_dom_1.render(<provider_1.default root={root_1.default}/>, document.getElementById('app'));
//# sourceMappingURL=index.js.map