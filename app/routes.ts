import { type RouteConfig, route, index, layout } from "@react-router/dev/routes"

export default [
  // Public routes
  index("routes/_index/route.tsx"),
  route("marketplace", "routes/marketplace/route.tsx"),

  // Dashboard routes (user)
  layout("routes/dashboard/layout.tsx", [
    route("dashboard", "routes/dashboard/route.tsx"),
    route("dashboard/tickets", "routes/dashboard.tickets/route.tsx"),
  ]),

  // Admin routes
  layout("routes/admin/layout.tsx", [route("admin", "routes/admin/route.tsx")]),

  // Owner routes
  layout("routes/owner/layout.tsx", [route("owner", "routes/owner/route.tsx")]),
] satisfies RouteConfig
