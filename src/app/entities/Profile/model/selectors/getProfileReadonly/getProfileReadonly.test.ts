import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("get profile readonly", () => {
  test("get data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });
  test("if state is undefined", () => {
    const state = {};
    expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
  });
});
