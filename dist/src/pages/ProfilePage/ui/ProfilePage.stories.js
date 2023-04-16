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
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import avatar from "shared/assets/test/storybook.jpg";
import { Country } from "app/entities/Country";
import { Currency } from "app/entities/Currency";
import ProfilePage from "./ProfilePage";
export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
var Template = function (args) { return (_jsx(ProfilePage, __assign({}, args), void 0)); };
export var Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: "Dima",
                age: 25,
                country: Country.Russia,
                lastName: "Zamulin",
                firstName: "Dmitriy",
                city: "Samara",
                currency: Currency.RUB,
                avatar: avatar,
            },
        },
    }),
];
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: "Dima",
                age: 25,
                country: Country.Russia,
                lastName: "Zamulin",
                firstName: "Dmitriy",
                city: "Samara",
                currency: Currency.RUB,
                avatar: avatar,
            },
        },
    }),
];
