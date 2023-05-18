import { Story } from "@storybook/react";
import { Suspense } from "react";
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import "@/app/styles/index.scss";

export const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<div>...</div>}>
    <StoryComponent />
  </Suspense>
);
