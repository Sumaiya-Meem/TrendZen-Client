import { Outlet } from "react-router-dom";
import Footers from "../components/Footers/Footers";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default MainLayout;