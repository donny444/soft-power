import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar_component";
import { Main } from "./home_component";
import Footer from "./footer_component";

export default function ThingsPage() {
    return (
        <>
            <NavBar />
            <Main />
            <Things />
            <Footer />
        </>
    )
}

function Things() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = "http://localhost:5174/things";
            const options = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            try {
                const response = await fetch(apiUrl, options);
                if(!response.ok) {
                    const errMsg = await response.text();
                    throw new Error(errMsg || "Network response was not ok");
                }
                const data = await response.json();
                setData(data);
            } catch(err) {
                setError(err.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {data &&
                <div className="things">
                    {data.map((thing, index) => (
                        <Thing key={index} thing={thing} />
                    ))}
                </div>
            }
        </div>
    )
}

function Thing({thing}) {
    return (
        <div className="thing">
            <img src="" alt="" />
            <h3 className="thing-name">{thing.name}</h3>
            <h4 className="thing-category">{thing.category}</h4>
            <p className="thing-description">{thing.description}</p>
            <Link to={thing._id}>
                <button className="more-detail">More detail</button>
            </Link>
        </div>
    )
}