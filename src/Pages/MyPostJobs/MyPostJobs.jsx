import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyPostJobs = () => {

    const [jobs, setJobs] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data)
            })
    }, [user.email])

    return (
        <div>
            <h1>MY post jobs {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job,idx) => <tr key={job._id}>
                                <th>{idx +1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>Blue</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostJobs;