import Layout from "../pages/layout/Layout";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      // {
      //   path:''
      // }
    ]
  }
])
export default router;
