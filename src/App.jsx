import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

//Pages
const routes = [
  {
    path: "/",
    component: lazy(() => import("./Pages/Home.jsx")),
  },
  {
    path: "/Services",
    component: lazy(() => import("./Pages/Services.jsx")),
  },
  {
    path: "/Projects",
    component: lazy(() => import("./Pages/Projects.jsx")),
  },
  {
    path: "/Blog",
    component: lazy(() => import("./Pages/Blog.jsx")),
  }
];

render(() => <Router>{routes}</Router>, document.getElementById("root"));


export default App;
