
const AddJob = () => {

    const hendleAddJobs =(e) =>{
        e.preventDefault();
        const fromData =new FormData(e.target);
        console.log(fromData.entries());
        const initialData =Object.fromEntries(fromData.entries())
        console.log(initialData)
        const {min,max,currence, ...newJobs} =initialData;
        newJobs.salaryRange={min,max,currence}
        console.log(newJobs)
    }

    return (
        <div>
            <h2 className="text-2xl">Post a new jobs</h2>
            <form onSubmit={hendleAddJobs} className="card-body">
                {/* jobs title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jon title</span>
                    </label>
                    <input type="text" name="title" placeholder="job title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jobs Location</span>
                    </label>
                    <input type="text" name="location" placeholder="jobs Location" className="input input-bordered" required />
                </div>
                {/* job type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jobs Location</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick the job type</option>
                        <option>full time</option>
                        <option>pat time</option>
                        <option>remote</option>
                    </select>

                </div>
                {/* job category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jobs fild</span>
                    </label>
                    <select name="jobType" className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick the job type</option>
                        <option>Engineering</option>
                        <option>markting</option>
                        <option>Fincens</option>
                    </select>

                </div>
                {/* salary range*/}
                <p></p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-3 items-end">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">salary range</span>
                        </label>
                        <input type="text" name="min" placeholder="min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="max" placeholder="max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select name="currence" className="select select-ghost w-full max-w-xs">
                            <option disabled selected>currence</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>Fincens</option>
                        </select>

                    </div>
                </div>
                {/* company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">company name</span>
                    </label>
                    <input type="text" name="compan" placeholder="company name" className="input input-bordered" required />
                </div>
                {/* jobs descripation */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jon descripation</span>
                    </label>
                    <textarea className="textarea textarea-primary" name="descripation" placeholder="descripation" required></textarea>
                </div>
                {/* jobs requiments */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jon descripation</span>
                    </label>
                    <textarea className="textarea textarea-primary" name="descripation" placeholder="put eatc requment" required></textarea>
                </div>
                {/* jobs responsebelety */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jon responsebelety</span>
                    </label>
                    <textarea className="textarea textarea-primary" name="responsebelety" placeholder=" write eatc responsebelety" required></textarea>
                </div>
                 {/* HR Name */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR name</span>
                    </label>
                    <input type="text" name="hr_name" placeholder="HR name" className="input input-bordered" required />
                </div>
                 {/* HR email */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR email</span>
                    </label>
                    <input type="text" name="hr_email" placeholder="HR email" className="input input-bordered" required />
                </div>
                 {/* HR email */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">company logo</span>
                    </label>
                    <input type="text" name="conpany_logo" placeholder="conpany_logo" className="input input-bordered" required />
                </div>

                {/* submit */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;