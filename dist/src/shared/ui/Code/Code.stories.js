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
import { jsx as _jsx } from "react/jsx-runtime";
import { Code } from "./Code";
export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" }
    },
    args: {
        to: "/"
    }
};
export var Template = function (args) { return (_jsx(Code, __assign({}, args), void 0)); };
