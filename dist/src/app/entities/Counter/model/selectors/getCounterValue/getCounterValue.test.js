import { getCounterValue } from "./getCounterValue";
describe("getCounterValue", function () {
    test("should return counter value", function () {
        var state = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});
