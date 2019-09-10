"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loadable_1 = require("../../lib/loadable");
exports.default = loadable_1.default({
    view: Promise.resolve().then(function () { return require(/* webpackChunkName: "FayReactMaterialUiHome" */ './views'); })
});
