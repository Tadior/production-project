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
import { Select } from "./Select";
export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
var Template = function (args) { return _jsx(Select, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    label: "Title",
    options: [
        { value: "value1", content: "value1" },
        { value: "value2", content: "value2" },
        { value: "value3", content: "value3" },
    ],
};
