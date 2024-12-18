
import Lottie from 'lottie-react';
import loginlottyData from '../../assets/lotty/login.json'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { auth } from '../../firebase/Firebase.init';
import GoogleSignIn from '../Shared/GoogleSignIn';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {

    const {signInUser} =useContext(AuthContext);
    const location =useLocation();
    const neveget =useNavigate()
    const from =location?.state || '/'
    console.log(location)

    const hendleLogin =(e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email,password)
        .then(result =>{
            console.log(result.user.email);
            const user ={email:email}
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
            .then(res =>{
                console.log(res.data)
            })
        })
        .catch(error =>{
            console.log(error.message)
        })

    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/3">

                        <Lottie animationData={loginlottyData}></Lottie>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className=" ml-4 pt-4 text-5xl font-bold">Login page</h1>
                        <form onSubmit={hendleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider">or</div>
                        <div className="flex justify-center py-3">
                        <GoogleSignIn></GoogleSignIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;