import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import Counter from "../pages/Counter/Counter";

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
        path:"/counter",
        element:<Counter/>
    },
    {
        path:"*",
        element: <NotFound/>
    }
])

export default router