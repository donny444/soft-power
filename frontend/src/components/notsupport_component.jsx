import NavBar from "./navbar_component";
import Footer from "./footer_component";

export default function NotSupportPage() {
    return (
        <>
            <NavBar />
            <p className="not-support">The route is not support.</p>
            <Footer />
        </>
    )
}