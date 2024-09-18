import { createBrowserRouter } from "react-router-dom";
import Calendar from "../pages/calendar/Calendar";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Main />
        },
        {
          path: '/calendar',
          element: <Calendar />
        }
      ]
    }
  ],
  {
    basename: "/planner-app"  // GitHub Pages에서 사용하는 repository name
  }
);

export default router;
