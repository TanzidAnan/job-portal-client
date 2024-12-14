import { useParams } from "react-router-dom";

const JobApply = () => {
    const { id } = useParams();
    console.log(id);

    const hendleJobApplication = (e) => {
        e.preventDefault()
        const form = e.target;
        const linking = form.linking.value;
        const github = form.github.value;
        const resume = form.Resume.value;
        console.log(linking, github, resume)
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
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;