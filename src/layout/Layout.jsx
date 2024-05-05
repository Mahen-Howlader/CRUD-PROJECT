import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";

function Layout() {
    return (
        <div className="container mx-auto">
            <Nav></Nav>
            <div className="min-h-[calc(100vh-308px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Layout;