import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div style={{
        padding: '40px 0px 0px 330px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
