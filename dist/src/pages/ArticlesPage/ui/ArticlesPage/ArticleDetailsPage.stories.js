import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ArticlesPage from "./ArticlesPage";
export default {
    title: "pages/ArticlesPage",
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
var Template = function () { return _jsx(ArticlesPage, {}, void 0); };
export var Light = Template.bind({});
Light.args = {};
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
