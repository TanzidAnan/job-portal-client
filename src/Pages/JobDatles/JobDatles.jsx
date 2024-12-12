import { useLoaderData } from "react-router-dom";

const JobDatles = () => {
    const job = useLoaderData();
    console.log(job);
    const {title,applicationDeadline,category,description,company } =job
    return (
        <div className="hero bg-base-200 min-h-[70vh]">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">
                        {description}
                    </p>
                    <h1>{category}</h1>
                    <p>{applicationDeadline}</p>
                    <p>{company}</p>
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDatles;