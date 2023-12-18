import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';



export const NavBar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();


    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    }
    return (
        <div className="NavBar">
            <nav>
                <img src="/logo.png" id="logo" alt="Logo" />

                <NavLink to="/" exact activeClassName="active">
                    Home
                </NavLink>

                <NavLink to="/products" activeClassName="active">
                    Products
                </NavLink>

                {!cookies.access_token ? (
                    <NavLink to="/auth" activeClassName="active">
                        Login/Register
                    </NavLink>
                ) : (
                    <button onClick={logout}>Logout</button>
                )}

            </nav>
        </div>
    );
};