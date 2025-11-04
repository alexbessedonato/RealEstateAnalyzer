import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { MainLayout } from "../common/MainLayout/MainLayout";
import { LandingPage } from "../pages/Main/LandingPage/LandingPage";

// 1️⃣ Define your route tree
export const rootRoute = createRootRoute({
  component: MainLayout,
});

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

// 2️⃣ Create router and add routes
const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({ routeTree });

// 👇 Optional but helpful: devtools overlay
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}