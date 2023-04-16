import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";
describe("Counter", function () {
    test("show button", function () {
        componentRender(_jsx(Counter, {}, void 0), {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });
    test("decrement", function () {
        componentRender(_jsx(Counter, {}, void 0), {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId("decrement-button"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
    test("increment", function () {
        componentRender(_jsx(Counter, {}, void 0), {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId("increment-button"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
});
