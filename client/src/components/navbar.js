import {Link} from "react-router-dom";



export const NavBar = () => {
    return (
    <div className="NavBar">
        <Link to="/"> Home </Link>
        <Link to="/auth"> Login/Register </Link>
    </div>
    );
};