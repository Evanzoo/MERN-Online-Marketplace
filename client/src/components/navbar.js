import React from "react";
import {Link} from "react-router-dom";



export const NavBar = () => {
    return (
    <div className="NavBar">
        <nav>
            <img src="/logo.png" id="logo" alt="Logo" />
            <ul>
            <Link to="/"> Home </Link>
            <Link to="/auth"> Login/Register </Link>
            </ul>
        </nav>
    </div>
    );
};