import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
    const application =useLoaderData();
    return (
        <div>
            <h1>Application for this jobs</h1>
        </div>
    );
};

export default ViewApplication;