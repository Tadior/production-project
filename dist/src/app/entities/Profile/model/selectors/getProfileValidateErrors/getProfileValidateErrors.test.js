import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/profile";
var errors = [
    ValidateProfileError.INCORRECT_AGE,
    ValidateProfileError.INCORRECT_USER_DATA,
    ValidateProfileError.INCORRECT_AGE,
    ValidateProfileError.INCORRECT_COUNTRY,
    ValidateProfileError.INCORRECT_CITY,
    ValidateProfileError.SERVER_ERROR,
    ValidateProfileError.NO_DATA,
];
describe("get profile errors test", function () {
    test("get errors", function () {
        var state = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidateErrors(state)).toEqual(errors);
    });
    test("if state is undefined", function () {
        var state = {};
        expect(getProfileValidateErrors(state)).toBe(undefined);
    });
});
