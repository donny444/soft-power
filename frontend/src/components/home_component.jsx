import { Link } from "react-router-dom";
import NavBar from "./navbar_component";
import Footer from "./footer_component";

export default function HomePage() {
    return (
        <>
            <NavBar />
            <Home />
            <Footer />
        </>
    )
}

function Home() {
    return (
        <>
            <Main />
            <Article />
            <Section />
        </>
    )
}

function Main() {
    return (
        <main>
            <h1>Know Thai Soft Power</h1>
            <h3>Get to know what it actually is, and the real meaning of "Soft Power"</h3>
            <div>
                <Link to="/things"><button className="things-button">Thai Soft Power</button></Link>
                <Link to="/tmd"><button className="tmd-button">Thai Weather</button></Link>
            </div>
        </main>
    )
}

function Article() {
    return (
        <article>
            <div>
                <h2>Meaning of "Soft Power" by Joseph Nye</h2>
                <p>In politics (and particularly in international politics), soft power is the ability to co-opt rather than coerce 
                    (in contrast with hard power). It involves shaping the preferences of others through appeal and attraction. 
                    Soft power is non-coercive, using culture, political values, and foreign policies to enact change. In 2012, 
                    Joseph Nye of Harvard University explained that with soft power, "the best propaganda is not propaganda", 
                    further explaining that during the Information Age, "credibility is the scarcest resource".
                </p>
                <p>Soft power <b>is not</b> the same thing as cultural diplomacy.</p>
            </div>
            <img src="src/assets/images/joseph_nye.jpg" alt="joseph_nye" />
        </article>
    )
}

function Section() {
    return (
        <section>
            <h2>Thailand Featured Soft Power</h2>
            <section>
                <h4>Mango with Sticky Rice</h4>
                <img src="src/assets/images/mango_with_sticky_rice.jpg" alt="mango_with_sticky_rice" />
            </section>
            <section>
                <h4>Y-Series</h4>
                <img src="src/assets/images/y_series.jpg" alt="y_series" />
            </section>
            <section>
                <h4>T-POP</h4>
                <img src="src/assets/images/t_pop.jpg" alt="t_pop" />
            </section>
            <section>
                <h4>Thai Foods</h4>
                <img src="src/assets/images/thai_food.jpg" alt="thai_food" />
            </section>
        </section>
    )
}