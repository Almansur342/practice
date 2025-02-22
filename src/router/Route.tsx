import App from "@/App";
import AllUsers from "@/customComponents/AlUsers";
import Home from "@/page/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"allUsers",
      element:<AllUsers/>
    },
    ]
  },
]);

export default router;
