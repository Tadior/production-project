import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ArticleDetailsPage from "./ArticleDetailsPage";
import { Theme } from "@/shared/const/theme";

export default {
  title: "pages/ArticleDetailsPage/ArticleDetailsPage",
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
