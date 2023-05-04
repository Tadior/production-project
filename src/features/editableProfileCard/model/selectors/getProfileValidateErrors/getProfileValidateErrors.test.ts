import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";

const errors = [
  ValidateProfileError.INCORRECT_AGE,
  ValidateProfileError.INCORRECT_USER_DATA,
  ValidateProfileError.INCORRECT_AGE,
  ValidateProfileError.INCORRECT_COUNTRY,
  ValidateProfileError.INCORRECT_CITY,
  ValidateProfileError.SERVER_ERROR,
  ValidateProfileError.NO_DATA
];

describe("get profile errors test", () => {
  test("get errors", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors
      }
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });
  test("if state is undefined", () => {
    const state = {};
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});
