import { FaMapMarkerAlt } from "react-icons/fa";

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
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;