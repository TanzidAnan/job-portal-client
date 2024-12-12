import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const ParvateRoutes = ({children}) => {

    const {user} =useContext(AuthContext)

    if(user){
        return children
    }
 
    return (
        <div>
            <Navigate to={'/signIn'}></Navigate>
        </div>
    );
};

export default ParvateRoutes;