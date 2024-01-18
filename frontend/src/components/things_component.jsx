import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import NavBar from "./navbar_component";
import { Main } from "./home_component";
import Footer from "./footer_component";

export function ThingsPage() {
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
    const specificThing = `/things/${thing._id}`;
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

export function ThingPage() {

    return (
        <>
            <NavBar />
            <SpecificThing />
            <Footer />
        </>
    )
}

function SpecificThing() {
    const { _id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = `http://localhost:5174/things/${_id}`;
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
                <div className="specific-data">
                    <h2>{data.name}</h2>
                    <h4>{data.category}</h4>
                    <p>{data.description}</p>
                </div>
            }
        </div>
    )
}

function CommentSection() {
    const isAuthenticated = useAuth();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = `http://localhost:5174/things/${_id}`;
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
            {isAuthenticated ? (
                <form >
                    <input type="text" maxLength={100} required />
                    <input type="submit" value="Comment" />
                </form>
            ) : (<></>)}

        </div>
    )
}

function Comments() {

}