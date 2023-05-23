import { screen } from "@testing-library/react";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
import AppRouter from "./AppRouter";
import { getRouteAbout, getRouteAdmin, getRouteProfile } from "@/shared/const/router";
import { UserRole } from "@/entities/User";

describe("app/router/AppRouter", () => {
  test("Page render", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout()
    });
    const page = await screen.findByTestId("aboutPage");
    expect(page).toBeInTheDocument();
  });

  test("Wrong route", async () => {
    componentRender(<AppRouter />, {
      route: "/fbsbfsf"
    });
    const page = await screen.findByTestId("NotFoundPage");
    expect(page).toBeInTheDocument();
  });

  test("redirect to main", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin()
    });
    const page = await screen.findByTestId("MainPage");
    expect(page).toBeInTheDocument();
  });

  test("private pages", async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile("1"),
      initialState: {
        user: {
          _inited: true,
          authData: {}
        }
      }
    });
    const page = await screen.findByTestId("ProfilePage");
    expect(page).toBeInTheDocument();
  });

  test("Access is unavailable, no role", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {}
        }
      }
    });
    const page = await screen.findByTestId("ForbiddenPage");
    expect(page).toBeInTheDocument();
  });

  test("Access is unavailable, no role", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            roles: [UserRole.ADMIN]
          }
        }
      }
    });
    const page = await screen.findByTestId("AdminPanelPage");
    expect(page).toBeInTheDocument();
  });
});