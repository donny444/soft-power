import { Link } from "react-router-dom";
import { useAuth } from "./auth";

export default function NavBar() {
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
    }
    return (
        <nav>
            <Link to="/"><img className="navbar-logo" src="/logo.jpg" alt="logo" /></Link>
            <div>
                <Link to="/things">Things</Link>
                <Link to="/tmd">Weather</Link>
                {isAuthenticated ? (
                    <>
                        <p className="navbar-username">{localStorage.getItem("userName")}</p>
                        <p className="navbar-logout" onClick={handleLogout}>Logout</p>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    )
}