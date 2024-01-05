import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar_component";

export default function ThingsPage() {
    return (
        <>
            <NavBar />
            <Things />
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
                <div className="things-data">
                    {data.map((index) => (
                        <Thing key={index} thing={data[index]} />
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
            <Link to={thing._id} className="more-detail">
                <button>More detail</button>
            </Link>
        </div>
    )
}