import { getProfileError } from "./getProfileError";
describe("get profile data test", function () {
    test("get data", function () {
        var state = {
            profile: {
                error: "new error",
            },
        };
        expect(getProfileError(state)).toEqual("new error");
    });
    test("if state is undefined", function () {
        var state = {};
        expect(getProfileError(state)).toBe(undefined);
    });
});
