import { getLoginUsername } from "./getLoginUsername";
describe("getLoginError", function () {
    test("should return true", function () {
        var state = {
            loginForm: {
                username: "name",
            },
        };
        expect(getLoginUsername(state)).toEqual("name");
    });
    test("should work with empty state", function () {
        var state = {};
        expect(getLoginUsername(state)).toEqual("");
    });
});
