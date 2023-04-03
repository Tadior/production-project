import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
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
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: "Dima",
    age: 25,
    country: Country.Russia,
    lastName: "Zamulin",
    firstName: "Dmitriy",
    city: "Samara",
    currency: Currency.RUB,
    avatar,
  },
};

export const Error = Template.bind({});
Error.args = {
  error: "Some error",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
