import { counterReducer, counterActions } from "./CounterSlice";
describe("getCounterValue", function () {
    test("decrement counter value", function () {
        var state = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });
    test("increment counter value", function () {
        var state = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });
    test("work with indefined", function () {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
