import { useEffect, useState } from "react";

const Hotjobs = () => {


    const [jobs,setJobs] =useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/jobs`)
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setJobs(data)
        })
    },[])


    return (
        <div>
            <div>
                {
                    jobs.map(job =>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;