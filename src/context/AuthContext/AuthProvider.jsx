import AuthContext from "./AuthContext";

const AuthProvider = () => {

    const userInfo ={

    }

    return (
        <AuthContext.Provider value={userInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;