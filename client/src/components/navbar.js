import React from "react";
import {Link} from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


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
            
            <Link to="/"> Home </Link>
            <Link to="/products"> Products </Link>
            
            {!cookies.access_token ? (<Link to="/auth"> Login/Register </Link>
            ) : (
            <button onClick={logout}> Logout </button>
            )};
            
        </nav>
    </div>
    );
};