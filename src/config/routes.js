import { LayoutAdmin } from "../layouts/LayoutAdmin";
import { LayoutBasic } from "../layouts/LayoutBasic";
import { Admin } from "../pages/Admin";
import { SingIn } from "../pages/Admin/singIn";
import { Home } from "../pages/home";
import { NotFound } from "../pages/NotFound";

import { Contact } from "../pages/contact";
import { Guess } from "../pages/guess";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: Admin,
  },
  {
    path: "/admin/login/*",
    layout: LayoutAdmin,
    component: SingIn,
  },
];

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
  {
    path: "/guess",
    layout: LayoutBasic,
    component: Guess,
  },
];

const routeNotFound = [
  {
    path: "/*",
    layout: LayoutBasic,
    component: NotFound,
  },
];

const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export { routes };
