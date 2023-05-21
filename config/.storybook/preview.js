import { addDecorator } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: "fullscreen",
  themes: {
    default: "light",
    list: [
      { name: "light", class: ["app", Theme.LIGHT], color: "#3188e7" },
      { name: "dark", class: ["app", Theme.DARK], color: "#1515bd" },
      { name: "red", class: ["app", Theme.RED], color: "#d20e0e" }
    ]
  }
};
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
