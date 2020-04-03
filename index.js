"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var superellipsejs_1 = require("superellipsejs");
exports.Preset = superellipsejs_1.Preset;
var SuperEllipse = function (props) {
    var w = props.width;
    var h = props.height;
    var _a = props.r1, r1 = _a === void 0 ? superellipsejs_1.Preset.iOS.r1 : _a, _b = props.r2, r2 = _b === void 0 ? superellipsejs_1.Preset.iOS.r2 : _b, p1 = props.p1, p2 = props.p2;
    var dataUri = superellipsejs_1.getSuperEllipsePathAsDataUri(w, h, p1 !== undefined ? p1 : r1 * w, p2 !== undefined ? p2 : r2 * w).dataUri;
    return react_1.default.createElement("div", __assign({}, props, { style: __assign(__assign({}, props.style), { width: props.width, height: props.height, maskImage: "url(\"" + dataUri + "\")", maskPosition: 'center', maskRepeat: 'no-repeat', 
            // maskSize: 'contain',
            WebkitMaskImage: "url(\"" + dataUri + "\")", WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }) }), props.children);
};
exports.SuperEllipseImg = function (props) {
    var w = props.width;
    var h = props.height;
    var _a = props.r1, r1 = _a === void 0 ? superellipsejs_1.Preset.iOS.r1 : _a, _b = props.r2, r2 = _b === void 0 ? superellipsejs_1.Preset.iOS.r2 : _b;
    var _c = props.strokeWidth, strokeWidth = _c === void 0 ? 0 : _c, _d = props.strokeColor, strokeColor = _d === void 0 ? 'rgba(255,255,255,0.5)' : _d, backgroundColor = props.backgroundColor;
    var path = superellipsejs_1.calcSuperEllipsePath(w, h, r1 * w, r2 * w);
    var id = "super-ellipse-" + w + "-" + h + "-" + r1 + "-" + r2;
    return react_1.default.createElement("svg", { width: w, height: h, viewBox: "0 0 " + w + " " + h, style: props.style },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: id },
                react_1.default.createElement("path", { fill: "#000", stroke: "none", d: path }))),
        react_1.default.createElement("g", { clipPath: "url(#" + id + ")" },
            backgroundColor &&
                react_1.default.createElement("rect", { width: w, height: h, fill: backgroundColor }),
            react_1.default.createElement("image", { href: props.href, width: w, height: h, preserveAspectRatio: "none" }),
            strokeWidth > 0 &&
                react_1.default.createElement("path", { stroke: strokeColor, strokeWidth: strokeWidth * 2, fill: "none", d: path })));
};
exports.default = SuperEllipse;
