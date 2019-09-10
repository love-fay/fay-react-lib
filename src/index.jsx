"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var provider_1 = require("../lib/provider");
var root_1 = require("./root");
document.title = 'Fay React Lib';
react_dom_1.render(<provider_1.default root={root_1.default}/>, document.getElementById('app'));
