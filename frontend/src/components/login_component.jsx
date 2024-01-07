import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";
import NavBar from "./navbar_component";

export default function LoginPage() {
    return (
        <>
            <NavBar />
            <LoginForm />
        </>
    )
}

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const { checkAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = "http://localhost:5714/login";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        try {
            const response = await fetch(apiUrl, options);
            if(!response.ok) {
                const errMsg = await response.text();
                throw new Error(errMsg || "Failed to login");
            }
            const data = await response.json();
            localStorage.setItem("userToken", data.token);
            localStorage.setItem("userId", data.id);
            checkAuth();
            const from = location.state?.from || "/";
            navigate(from);
        } catch(err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <h2 className="auth-header">Login</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-field">
                    <label className="auth-label">Username:</label>
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Your username here"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        maxLength={20}
                        required
                    />
                </div>
                <div className="auth-field">
                    <label className="auth-label">Password:</label>
                    <input
                        className="auth-input"
                        type="password"
                        placeholder="Your password here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        maxLength={16}
                        required />
                </div>
                <input className="auth-submit" type="submit" value="Login"></input>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}