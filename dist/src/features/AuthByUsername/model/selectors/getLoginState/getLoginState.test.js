import { getLoginState } from "./getLoginState";
describe("getLoginError", function () {
    test("should return true", function () {
        var loginForm = {
            password: "123",
            username: "user",
            isLoading: true,
            error: "error",
        };
        var state = {
            counter: {
                value: 45,
            },
            user: {
                authData: {
                    id: "red",
                    username: "red",
                },
            },
            loginForm: loginForm,
        };
        expect(getLoginState(state)).toEqual(loginForm);
    });
    test("should work with empty state", function () {
        var state = {};
        expect(getLoginState(state)).toEqual(undefined);
    });
});
