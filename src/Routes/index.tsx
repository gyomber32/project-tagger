import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage, LoginPage, NotFound, Project } from "../Pages";
import { getUser } from "../Store/Selectors";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(getUser);

  if (!Object.keys(user).length) {
    return <Navigate to="/login" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/project/:id",
    element: (
      <ProtectedRoute>
        <Project />
      </ProtectedRoute>
    ),
  },
  {
    path: "/project/new",
    element: (
      <ProtectedRoute>
        <Project />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
