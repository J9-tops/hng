import { RouteObject } from "react-router";
import RootLayout from "./components/RootLayout";
import Step1Selection from "./pages/Step1Selection";
import Step2Details from "./pages/Step2Details";
import Step3Printout from "./pages/Step3Printout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Step1Selection />,
      },
      {
        path: "/details",
        element: <Step2Details />,
      },
      {
        path: "/downloadticket",
        element: <Step3Printout />,
      },
    ],
  },
];
