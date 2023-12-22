import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import TaskManager from "../Pages/Dashboard/TaskManager";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import TodoApp from "../Pages/Dashboard/TodoApp";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:"task-manager",
                        element:<TaskManager></TaskManager>
                    },
                    {
                        path:"to-do-app",
                        element:<TodoApp></TodoApp>
                    }
                ]
            }
        ]
    }
]);
export default router;