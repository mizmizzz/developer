import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:'/',
        element:<Main/>
      }
    ]
  }
])
export default router;
