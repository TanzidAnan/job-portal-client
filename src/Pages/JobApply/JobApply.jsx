import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const naveget = useNavigate();
    console.log(id, user);

    const hendleJobApplication = (e) => {
        e.preventDefault()
        const form = e.target;
        const linking = form.linking.value;
        const github = form.github.value;
        const resume = form.Resume.value;
        console.log(linking, github, resume);

        const jobApplication = {
            job_id: id,
            applicent_email: user.email,
            linking,
            github,
            resume,
        }
        fetch('http://localhost:5000/job_application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    naveget('/myapplication')
                }
            })

    }

    return (

        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl font-bold">apply job good luck</h1>
            <form onSubmit={hendleJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linking</span>
                    </label>
                    <input type="url" name="linking" placeholder="linking" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">gitHub url</span>
                    </label>
                    <input type="url" name="github" placeholder="gitHub url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume</span>
                    </label>
                    <input type="url" name="Resume" placeholder="Resume" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;