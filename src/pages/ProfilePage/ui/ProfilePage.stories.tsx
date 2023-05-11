import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import avatar from "@/shared/assets/test/storybook.jpg";
import { Country } from "@/app/entities/Country";
import { Currency } from "@/app/entities/Currency";
import ProfilePage from "./ProfilePage";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Light = Template.bind({});
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
        avatar,
      },
    },
  }),
];

export const Dark = Template.bind({});
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
        avatar,
      },
    },
  }),
];
