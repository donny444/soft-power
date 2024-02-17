import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

export function Main() {
    const slideImages = [
        "src/assets/images/thailand.jpg",
        "src/assets/images/market.jpg",
        "src/assets/images/tuktuk.jpg",
        "src/assets/images/farm.jpg"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % slideImages.length);
        }, 5000);
        return () => clearInterval(timer); // This will clear the interval on unmount
    }, [currentImageIndex, slideImages.length]);

    function doSlideshow() {
        if(nextImageIndex >= slideImages.length) {
          nextImageIndex = 0;
        }
        hero.style.backgroundImage = 'url("' + slideImages[nextImageIndex] + '")';
        setTimeout(doSlideshow(), 5000);
    }

    return (
        <main id="hero" style={{backgroundImage: `url(${slideImages[currentImageIndex]})`}}>
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
                <p>Soft power <span>is not</span> the same thing as cultural diplomacy.</p>
                <p>Source: <a href="https://en.wikipedia.org/wiki/Soft_power">Wikipedia</a></p>
            </div>
            <img src="src/assets/images/joseph_nye.jpg" alt="joseph_nye" />
        </article>
    )
}

function Section() {
    return (
        <section>
            <h2>Thailand Featured Soft Power</h2>
            <div>
                <div>
                    <h4>Mango with Sticky Rice</h4>
                    <img src="src/assets/images/mango_with_sticky_rice.jpg" alt="mango_with_sticky_rice" />
                </div>
                <div>
                    <h4>Y-Series</h4>
                    <img src="src/assets/images/y_series.jpg" alt="y_series" />
                </div>
                <div>
                    <h4>T-POP</h4>
                    <img src="src/assets/images/t_pop.jpg" alt="t_pop" />
                </div>
                <div>
                    <h4>Pad Krapow</h4>
                    <img src="src/assets/images/pad_krapow.jpg" alt="pad_krapow" />
                </div>
            </div>
        </section>
    )
}