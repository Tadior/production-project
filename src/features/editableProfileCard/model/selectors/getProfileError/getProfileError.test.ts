import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("get profile data test", () => {
  test("get data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "new error",
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual("new error");
  });
  test("if state is undefined", () => {
    const state = {};
    expect(getProfileError(state as StateSchema)).toBe(undefined);
  });
});
