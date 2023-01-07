import { Outlet, Link } from "react-router-dom";
import Navbar from "../Component/navbar";
import Header from "../Component/header";

const Layout = () => {
  return (
    <div className="container-fluid bg-dark text-white">
        <div className="row">
            <Header />
        </div>

        {/*navbar */}
        <div className="row">
            <Navbar />
        </div>

        <div className="row">
            {/*content*/}
            <div className="col-3">
                {/*profile*/}
            </div>
            <div className="col-9"><Outlet /></div>
        </div>
    </div>
  )
};

export default Layout;
