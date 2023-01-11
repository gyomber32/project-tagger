import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, NotFound, Project } from "../Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
  {
    path: "/project/new",
    element: <Project />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
