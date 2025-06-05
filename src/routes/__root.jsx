import * as React from "react";
import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { ErrorBoundaryWithNavigate, Pagina404 }from "../components/ErrorBoundaries";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { statusCode } = useRouterState();
  return (
    <React.Fragment>
      <ErrorBoundaryWithNavigate>
        {statusCode === 404 ? <Pagina404 /> : <Outlet />}
      </ErrorBoundaryWithNavigate>
    </React.Fragment>
  );
}
