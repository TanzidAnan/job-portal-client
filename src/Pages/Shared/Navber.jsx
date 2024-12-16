import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import jonIcon from '../../assets/job-app/favIcon.png'

const Navber = () => {

    const { user,logOUt } = useContext(AuthContext);

    const hendleLogout = () => {
        logOUt()
            .then(() => {
                // alert('sign out')
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/myapplication'}>my application</Link></li>
        <li><Link to={'/addjob'}>Add Jobs</Link></li>
        <li><Link to={'/mypostedjobs'}>my post jobs</Link></li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                   <img className="w-12" src={jonIcon} alt="" />
                   <h3 className="text-2xl font-bold">Job portal</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button className="btn" onClick={hendleLogout}>Log out</button>
                    </> : <>
                        <Link to={'/register'}>Register</Link>
                        <Link to={'/signIn'}>
                            <button className="btn">signIn</button>
                        </Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navber;