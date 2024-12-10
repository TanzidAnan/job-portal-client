import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement:<h2>Routes not fount</h2>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
]);


export default router