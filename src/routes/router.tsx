import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path:"*",
        element: <NotFound/>
    }
])

export default router