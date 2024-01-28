import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "./auth";
import NavBar from "./navbar_component";
import Footer from "./footer_component";

export default function LoginPage() {
    return (
        <>
            <NavBar />
            <LoginForm />
            <Footer />
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
        const apiUrl = "http://localhost:5174/login";
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
            sessionStorage.setItem("userToken", data.token);
            sessionStorage.setItem("userName", data.user.username);
            sessionStorage.setItem("userId", data.user._id);
            checkAuth();
            const from = location.state?.from || "/";
            navigate(from);
        } catch(err) {
            setError(err.message);
        }
    }

    return (
        <div className="auth-block">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="auth-header">Login</h2>
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
                <div className="auth-decide">
                    <Link to="/register"><p className="auth-switch">Don't have an account? Register here.</p></Link>
                    <input className="auth-submit" type="submit" value="Login" />
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}