import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
describe("Button", function () {
    test("show button", function () {
        componentRender(_jsx(Sidebar, {}, void 0));
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("test toggle", function () {
        componentRender(_jsx(Sidebar, {}, void 0));
        var toggleBtn = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
