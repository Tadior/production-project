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
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "./Text";
export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    title: "Title",
    text: "Lorem ipsum",
};
export var Error = Template.bind({});
Error.args = {
    title: "Title",
    text: "Lorem ipsum",
    theme: TextTheme.ERROR,
};
export var OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: "Title",
};
export var OnlyText = Template.bind({});
OnlyText.args = {
    text: "Lorem ipsum",
};
export var PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "Title",
    text: "Lorem ipsum",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export var OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: "Title",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export var OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: "Lorem ipsum",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export var SizeL = Template.bind({});
SizeL.args = {
    title: "Some title",
    text: "Lorem ipsum",
    size: TextSize.L
};
