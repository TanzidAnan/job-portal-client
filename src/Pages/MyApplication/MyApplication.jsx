import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplication = () => {
    const {user} =useAuth();
    // console.log(user);
    const [jobs,setJobs] =useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/job_application?email=${user.email}`)
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setJobs(data)
        })
    },[user.email])
    return (
        <div>
            <h2>My app {jobs.length}</h2>
        </div>
    );
};

export default MyApplication;