import { jsx as _jsx } from "react/jsx-runtime";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
export var RouterDecorator = function (story) { return (_jsx(BrowserRouter, { children: story() }, void 0)); };
