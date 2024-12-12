import { useLoaderData } from "react-router-dom";

const JobDatles = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
            job detles
        </div>
    );
};

export default JobDatles;