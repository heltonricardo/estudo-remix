import { ActionArgs, redirect } from "@remix-run/node";

export function loader({ params }: ActionArgs) {
  if (params["*"] === "exp") {
    return redirect("/expenses");
  }

  if (params["*"] === "exp/r") {
    return redirect("/expenses/raw");
  }

  if (params["*"] === "price") {
    return redirect("/pricing");
  }

  return redirect("/");
}
