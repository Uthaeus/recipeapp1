import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import Home from "./pages/home";
import Error from "./pages/error";
import AuthLayout from "./components/auth/auth-layout";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path: "/auth/signup",
        element: <Signup />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
