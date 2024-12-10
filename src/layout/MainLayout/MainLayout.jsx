import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-7xl ">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;