import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Button", () => {
  test("show button", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
