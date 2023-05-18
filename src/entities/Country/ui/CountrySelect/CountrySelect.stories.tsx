import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";
import { Country } from "../../model/types/country";

export default {
  title: "entities/CountrySelect",
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = { value: Country.Armenia };
