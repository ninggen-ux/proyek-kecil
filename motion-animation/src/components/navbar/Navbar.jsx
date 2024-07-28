import { Link, Outlet } from "react-router-dom";
import "../../scss/navbar.scss";

export default function Navbar() {
    return (
        <div className="main-container">
            <div className="navbar">
                <Link className="navbar__item" to="/">
                    Layout
                </Link>
            </div>
            <Outlet />
        </div>
    );
}
