import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

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
                    jobs.map(job =><HotJobsCard key={job._id}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;