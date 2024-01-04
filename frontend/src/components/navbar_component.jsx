import { Link } from "react-router-dom"
import { useAuth } from "./auth";

export default function NavBar() {
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
    }
    return (
        <div className="navbar">
            <Link to="/"><img className="navbar-logo" src="logo.jpg" alt="logo" /></Link>
            <div>
                <Link to="/things"><button className="navbar-things">Things</button></Link>
                <Link to="/tmd"><button className="navbar-tmd">Weather</button></Link>
                {isAuthenticated ? (
                    <>
                        <p className="navbar-username"></p>
                        <button className="navbar-logout" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login"><button className="navbar-login">Login</button></Link>
                        <Link to="/register"><button className="navbar-register">Register</button></Link>
                    </>
                )}
            </div>
        </div>
    )
}