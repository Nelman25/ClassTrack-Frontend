import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/RootLayout";
import Masterlist from "./pages/Masterlist";
import GradingSheet from "./pages/GradingSheet";
import AttendanceSheet from "./pages/AttendanceSheet";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/masterlist",
        element: <Masterlist />,
      },
      {
        path: "/grading-sheet",
        element: <GradingSheet />,
      },
      {
        path: "/attendance-sheet",
        element: <AttendanceSheet />,
      },
    ],
  },
  { path: "/dashboard", element: <Dashboard /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
