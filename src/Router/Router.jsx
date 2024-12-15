import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDatles from "../Pages/JobDatles/JobDatles";
import ParvateRoutes from "./ParvateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";

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
                element:<ParvateRoutes><JobDatles></JobDatles></ParvateRoutes>,
                loader:({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path:'/jobApply/:id',
                element:<ParvateRoutes><JobApply></JobApply></ParvateRoutes>
            },
            {
                path:'/myapplication',
                element:<ParvateRoutes><MyApplication></MyApplication></ParvateRoutes>
            },
            {
                path:'/addjob',
                element:<ParvateRoutes><AddJob></AddJob></ParvateRoutes>
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