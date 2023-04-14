import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import MainHeader from "~/components/navigation/MainHeader";
import sharedStyles from "~/styles/shared.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "My Expenses",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: sharedStyles },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" },
  ];
}
