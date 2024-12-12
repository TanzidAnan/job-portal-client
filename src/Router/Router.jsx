import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDatles from "../Pages/JobDatles/JobDatles";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement:<h2>Routes not fount</h2>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/job/:id',
                element:<JobDatles></JobDatles>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            }
        ]
    },
]);


export default router