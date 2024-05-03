import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SyncStatesExercise1 } from "./exercises/1-sync-state";
import { ExpensiveCalculationsExercise2 } from "./exercises/2-expensive-calculation";
import { InitializeStateValueExercise3 } from "./exercises/3-initialize-state";
import { ExternalSystemExample2 } from "./examples/2-external-system";
import { ResetStateExercise4 } from "./exercises/4-reset-state";
import { SubscribeExternalStoreExercise5 } from "./exercises/5-subscribe-external-store";
import { ExternalStoreExample3 } from "./examples/3-external-store";
import { HomePage } from "./home";
import { AnalyticsExample4 } from "./examples/4-analytics";
import { BrowserApiExample1 } from "./examples/1-browser-api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "example",
    children: [
      {
        path: "1",
        element: <BrowserApiExample1 />,
      },
      {
        path: "2",
        element: <ExternalSystemExample2 />,
      },
      {
        path: "3",
        element: <ExternalStoreExample3 />,
      },
      {
        path: "4",
        element: <AnalyticsExample4 />,
      },
    ],
  },
  {
    path: "exercise",
    children: [
      {
        path: "1",
        element: <SyncStatesExercise1 />,
      },
      {
        path: "2",
        element: <ExpensiveCalculationsExercise2 />,
      },
      {
        path: "3",
        element: <InitializeStateValueExercise3 />,
      },
      {
        path: "4",
        element: <ResetStateExercise4 />,
      },
      {
        path: "5",
        element: <SubscribeExternalStoreExercise5 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
