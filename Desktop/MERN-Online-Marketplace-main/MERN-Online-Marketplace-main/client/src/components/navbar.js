//navbar.js
import React from "react";
import { Link } from "react-router-dom";



export const NavBar = () => {
    return (
        <div className="NavBar">
            <nav>
                <img src="/logo.png" id="logo" alt="Logo" />
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/auth"> Login/Register </Link></li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/new-product">New Product</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};