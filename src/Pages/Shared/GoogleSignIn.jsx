import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const GoogleSignIn = () => {

    const {googleSignIn} =useContext(AuthContext)

    const hendleGoogleSignIn =() =>{
        googleSignIn()
        .then((result) =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <button onClick={hendleGoogleSignIn} className="btn">Google</button>
        </div>
    );
};

export default GoogleSignIn;