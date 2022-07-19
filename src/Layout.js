    import React from "react";
    import "./style.css"

    import { Link, NavLink, Outlet } from "react-router-dom";
// ### navbar
    const Layout = () => {
    return (
        <div className=" container ">
        <nav className=" container navbar navbar-expand-lg navbar navbar-dark bg-primary mt-3 mb-4  fixed-top">
            <div className="container-fluid ">
            <Link to="/" className="navbar-brand " href="#">
                <span> Egemen FAZLIOGLU </span>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link  " aria-current="page">
                    {/* "active" classı eklenebılır ama gerek yok NavLink ile otomatik "active" classı eklenıyor */}
                    Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                    About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                    Contact
                    </NavLink>
                </li>
                </ul>


                <span className="navbar-text ">4. Hafta Odevi </span>
            </div>
            </div>
        </nav>
        <Outlet />
        </div>
    );
    };

    export default Layout;
