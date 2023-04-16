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
import { Country } from "app/entities/Country";
import { Currency } from "app/entities/Currency";
import avatar from "shared/assets/test/storybook.jpg";
import { ProfileCard } from "./ProfileCard";
export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
var Template = function (args) { return (_jsx(ProfileCard, __assign({}, args), void 0)); };
export var Primary = Template.bind({});
Primary.args = {
    data: {
        username: "Dima",
        age: 25,
        country: Country.Russia,
        lastName: "Zamulin",
        firstName: "Dmitriy",
        city: "Samara",
        currency: Currency.RUB,
        avatar: avatar,
    },
};
export var Error = Template.bind({});
Error.args = {
    error: "Some error",
};
export var Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
