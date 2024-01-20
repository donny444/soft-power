import { useState, useEffect } from "react";
import NavBar from "./navbar_component";
import Footer from "./footer_component";

export default function TmdPage() {
    return (
        <>
            <NavBar />
            <p className="not-support">The feature is not ready.</p>
            <Footer />
        </>
    )
}

function Tmd() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = new URL("http://localhost:5174/tmd");
            const queries = {
                province: "สมุทรปราหาร",
                amphoe: "บางพลี",
                tambon: "บางแก้ว"
            }
            const options = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            for(let i in queries) {
                apiUrl.searchParams.append(i, queries[i]);
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
                <div>
                    <p>{data.WeatherForecasts[0].forecasts[0].data.rh}</p>
                    <p>{data.WeatherForecasts[0].forecasts[0].data.tc}</p>
                </div>
            }
        </div>
    )
}