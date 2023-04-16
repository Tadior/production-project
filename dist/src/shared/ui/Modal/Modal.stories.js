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
import { Modal } from "./Modal";
export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
var Template = function (args) { return _jsx(Modal, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero veniam ex expedita id error aliquam quas quam eligendi, ipsa nisi dignissimos saepe accusamus laudantium voluptate esse deleniti impedit praesentiuVoluptatibus, amet nesciunt unde in aspernatur eos dicta enim alias est, sunt dolorum totam eius similique sit harum nam perferendis sint earum labore libero illo saepe autem fuga? Blanditiis, fuga.Quis neque quasi, doloribus alias aut ratione maxime cumque perspiciatis libero reiciendis vel molestias vero sequi dignissimos explicabo quas provident autem fugiat quibusdam unde quisquam blanditiis nulla praesentium voluptatibus. Atque.",
};
export var Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero veniam ex expedita id error aliquam quas quam eligendi, ipsa nisi dignissimos saepe accusamus laudantium voluptate esse deleniti impedit praesentiuVoluptatibus, amet nesciunt unde in aspernatur eos dicta enim alias est, sunt dolorum totam eius similique sit harum nam perferendis sint earum labore libero illo saepe autem fuga? Blanditiis, fuga.Quis neque quasi, doloribus alias aut ratione maxime cumque perspiciatis libero reiciendis vel molestias vero sequi dignissimos explicabo quas provident autem fugiat quibusdam unde quisquam blanditiis nulla praesentium voluptatibus. Atque.",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
