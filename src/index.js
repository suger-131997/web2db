"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
var App_1 = __importDefault(require("./App"));
var serviceWorker = __importStar(require("./serviceWorker"));
var header = ["職業", "HP", "MP"];
var url = 'https://wikiwiki.jp/seikai/%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0/%E8%BB%A2%E8%81%B7';
document.title = "Web2DB";
react_dom_1["default"].render(react_1["default"].createElement(App_1["default"], { header_data: header, url: url }), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// ./node_modules/.bin/tsc --jsx react src/index.tsx --esModuleInterop
