import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // /dashboard/*
  route("dashboard", "routes/dashboard/dashboard.layout.tsx", [
    index("routes/dashboard/dashboard.index.tsx"),
    route("events", "routes/dashboard/dashboard.events.tsx"),
    route("tickets", "routes/dashboard/dashboard.tickets.tsx"),
    route("loyalty", "routes/dashboard/dashboard.loyalty.tsx"),
    route("checkin", "routes/dashboard/dashboard.checkin.tsx"),
  ]),

  // /auth/*
  route("auth", "routes/auth/auth.layout.tsx", [
    route("login", "routes/auth/auth.login.tsx"),
    route("register", "routes/auth/auth.register.tsx"),
  ]),
] satisfies RouteConfig;
