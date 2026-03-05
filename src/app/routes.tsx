import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DebatesPage } from "./pages/DebatesPage";
import { DebateDetailPage } from "./pages/DebateDetailPage";
import { SchoolsPage } from "./pages/SchoolsPage";
import { LearnPage } from "./pages/LearnPage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "debates", element: <DebatesPage /> },
      { path: "debates/:id", element: <DebateDetailPage /> },
      { path: "schools", element: <SchoolsPage /> },
      { path: "learn", element: <LearnPage /> },
      { path: "feedback", element: <FeedbackPage /> },
    ],
  },
]);