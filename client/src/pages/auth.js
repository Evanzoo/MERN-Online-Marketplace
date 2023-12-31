import { useState } from "react";
import axios from "axios";
import { set } from "mongoose";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    return(
    <div className="auth">
        <Login />
        <Register />
    </div>
    );
};

const Login = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", { 
                username,
                email, 
                password, 
            });
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
        } catch(err) {
            console.error(err);
        }

   }

    return (
        <Form 
            username={username} 
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password} 
            setPassword={setPassword}
            label="Login"
            onSubmit={onSubmit}
        />
    );
};

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", { 
                username,
                email, 
                password, 
            });
            alert("Registration Completed! Now Log in.")
        } catch (err) {
            console.error(err);
        }

    };

    return (
        <Form 
            username={username} 
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password} 
            setPassword={setPassword}
            label="Register"
            onSubmit={onSubmit}
        />
    );
};

const Form = ({ username, setUsername, email, setEmail, password, setPassword, label, onSubmit }) => {
    return (
        <div className="auth-container">
            <form onSubmit={onSubmit}>
                <h2> {label} </h2>
                {label === "Register" && (
                    <div className="form-group">
                        <label htmlFor="email"> Email: </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="username"> {label === "Register" ? "Username" : "Email"}: </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit"> {label} </button>
            </form>
        </div>
    );
};
