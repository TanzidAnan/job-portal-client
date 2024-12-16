import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
    const { _id, title, company, description, company_logo, responsibilities, location, salaryRange } = job
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="flex gap-2 mt-3">
                    <figure>
                        <img
                            className="w-16"
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h3 className="text-2xl">{company}</h3>
                        <p className="flex gap-2 items-center"><FaMapMarkerAlt /> {location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {
                            responsibilities?.map((skil, idx) => <p
                                className="border rounded-lg text-center px-2 py-1 hover:bg-red-300 hover:text-black"
                                key={idx}
                            >{skil}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end items-center mt-4">
                        <p>salary: {salaryRange?.min} -{salaryRange?.max}</p>
                        <Link to={`/job/${_id}`}>
                            <button className="btn btn-primary">Apply</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;