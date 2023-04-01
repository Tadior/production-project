import { getUserAuthData } from "app/entities/User";
import { Suspense, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader";

const AppRouter = () => {
  // <Suspense fallback={<PageLoader />}>
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
          return false;
        }
        return true;
      }),
    [isAuth]
  );
  return (
    <div className="page-wrapper">
      <Routes>
        {routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper ">{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </div>
  );
  // </Suspense>
};

export default memo(AppRouter);
