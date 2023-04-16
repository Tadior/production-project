import { getLoginPassword } from "./getLoginPassword";
describe("getLoginError", function () {
    test("should return true", function () {
        var state = {
            loginForm: {
                password: "123",
            },
        };
        expect(getLoginPassword(state)).toEqual("123");
    });
    test("should work with empty state", function () {
        var state = {};
        expect(getLoginPassword(state)).toEqual("");
    });
});
