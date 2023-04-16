import { getProfileReadonly } from "./getProfileReadonly";
describe("get profile readonly", function () {
    test("get data", function () {
        var state = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state)).toBe(true);
    });
    test("if state is undefined", function () {
        var state = {};
        expect(getProfileReadonly(state)).toBe(undefined);
    });
});
