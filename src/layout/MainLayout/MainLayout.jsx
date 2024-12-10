import { Outlet } from "react-router-dom";
import Navber from "../../Pages/Shared/Navber";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;