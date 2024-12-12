import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ParvateRoutes = ({children}) => {

    const {user,loading} =useContext(AuthContext);
    const location =useLocation();
    console.log(location)

    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }


    if(user){
        return children
    }
 
    return (
        <div>
            <Navigate to={'/signIn'} state={location?.pathname} ></Navigate>
        </div>
    );
};

export default ParvateRoutes;