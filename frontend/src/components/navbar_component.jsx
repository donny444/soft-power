import { Link } from "react-router-dom";
import { useAuth } from "./auth";

export default function NavBar() {
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
    }
    return (
        <nav>
            <Link to="/"><img className="navbar-logo" src="logo.jpg" alt="logo" /></Link>
            <ul>
                <li className="navbar-things"><Link to="/things">Things</Link></li>
                <li className="navbar-tmd"><Link to="/tmd">Weather</Link></li>
                {isAuthenticated ? (
                    <>
                        <li className="navbar-username"></li>
                        <li className="navbar-logout" onClick={handleLogout}>Logout</li>
                    </>
                ) : (
                    <>
                        <li className="navbar-login"><Link to="/login">Login</Link></li>
                        <li className="navbar-register"><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}