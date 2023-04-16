import { getProfileIsLoading } from "./getProfileIsLoading";
describe("get profile data test", function () {
    test("get isLoading", function () {
        var state = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state)).toBe(true);
    });
    test("if state is undefined", function () {
        var state = {};
        expect(getProfileIsLoading(state)).toBe(undefined);
    });
});
