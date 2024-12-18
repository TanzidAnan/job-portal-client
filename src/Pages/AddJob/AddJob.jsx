import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
    const neveget =useNavigate();
    const {user} =useAuth();
    console.log(user)

    const hendleAddJobs =(e) =>{
        e.preventDefault();
        const fromData =new FormData(e.target);
        console.log(fromData.entries());
        const initialData =Object.fromEntries(fromData.entries())
        // console.log(initialData)
        const {min,max,currency, ...newJobs} =initialData;
        newJobs.salaryRange={min,max,currency}
        newJobs.requirements=newJobs.requirements.split('\n')
        newJobs.responsibilities=newJobs.responsibilities.split('\n')
        console.log(newJobs);

        fetch('http://localhost:5000/jobs',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newJobs)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  neveget('/')
            }
        })
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
                    <select name="jobType" defaultValue='Pick the job type' className="select select-ghost w-full max-w-xs">
                        <option disabled>Pick the job type</option>
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
                    <select defaultValue='Pick the job type' name="category" className="select select-ghost w-full max-w-xs">
                        <option disabled>Pick the job type</option>
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
                        <select defaultValue='currence' name="currency" className="select select-ghost w-full max-w-xs">
                            <option disabled >currence</option>
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
                    <input type="text" name="company" placeholder="company name" className="input input-bordered" required />
                </div>
                {/* jobs descripation */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jon descripation</span>
                    </label>
                    <textarea className="textarea textarea-primary" name="description" placeholder="descripation" required></textarea>
                </div>
                {/* jobs requiments */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jon descripation</span>
                    </label>
                    <textarea className="textarea textarea-primary" name="requirements" placeholder="put eatc requment" required></textarea>
                </div>
                {/* jobs responsebelety */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">jon responsebelety</span>
                    </label>
                    <textarea className="textarea textarea-primary" name="responsibilities" placeholder=" write eatc responsebelety" required></textarea>
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
                    <input type="email" name="hr_email" defaultValue={user?.email} placeholder="HR email" className="input input-bordered" required />
                </div>
                 {/* companiy logo */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">company logo</span>
                    </label>
                    <input type="text" name="conpany_logo" placeholder="company_logo" className="input input-bordered" required />
                </div>
                 {/* applicationDeadline  */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">applicationDeadline</span>
                    </label>
                    <input type="text" name="applicationDeadline" placeholder="applicationDeadline" className="input input-bordered" required />
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