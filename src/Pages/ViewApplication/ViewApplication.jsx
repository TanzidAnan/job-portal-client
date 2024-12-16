import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
    const application = useLoaderData();

    const hendlestatusUpdate = (e, id) => {
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:5000/job_application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <h1>Application for this jobs {application.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Update states</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            application.map((app, idx) => <tr key={app._id}>
                                <th>{idx + 1}</th>
                                <td>{app.applicent_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select
                                        onChange={(e) => hendlestatusUpdate(e, app._id)}
                                        defaultValue={app.status || 'change status'}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled >change status</option>
                                        <option>under reviue</option>
                                        <option>Tiny Orange</option>
                                        <option>Tiny Tomato</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;