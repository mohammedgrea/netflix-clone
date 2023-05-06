import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserAuth } from "./context/AuthenticationContext";
export default function App() {
  const { currentUser } = UserAuth();
  const router = createBrowserRouter([
    {
      path: "/Dashboard",
      element: currentUser ? <Dashboard /> : <SignIn />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
