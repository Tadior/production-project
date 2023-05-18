import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";
import { Theme } from "@/shared/const/theme";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero veniam ex expedita id error aliquam quas quam eligendi, ipsa nisi dignissimos saepe accusamus laudantium voluptate esse deleniti impedit praesentiuVoluptatibus, amet nesciunt unde in aspernatur eos dicta enim alias est, sunt dolorum totam eius similique sit harum nam perferendis sint earum labore libero illo saepe autem fuga? Blanditiis, fuga.Quis neque quasi, doloribus alias aut ratione maxime cumque perspiciatis libero reiciendis vel molestias vero sequi dignissimos explicabo quas provident autem fugiat quibusdam unde quisquam blanditiis nulla praesentium voluptatibus. Atque."
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero veniam ex expedita id error aliquam quas quam eligendi, ipsa nisi dignissimos saepe accusamus laudantium voluptate esse deleniti impedit praesentiuVoluptatibus, amet nesciunt unde in aspernatur eos dicta enim alias est, sunt dolorum totam eius similique sit harum nam perferendis sint earum labore libero illo saepe autem fuga? Blanditiis, fuga.Quis neque quasi, doloribus alias aut ratione maxime cumque perspiciatis libero reiciendis vel molestias vero sequi dignissimos explicabo quas provident autem fugiat quibusdam unde quisquam blanditiis nulla praesentium voluptatibus. Atque."
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
