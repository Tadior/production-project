import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("get profile data test", () => {
  test("get isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toBe(true);
  });
  test("if state is undefined", () => {
    const state = {};
    expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
  });
});
