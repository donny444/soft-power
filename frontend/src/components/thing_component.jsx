import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./auth";
import NavBar from "./navbar_component";
import Footer from "./footer_component";

export default function ThingPage() {
    const { _id } = useParams();

    return (
        <>
            <NavBar />
            <SpecificThing _id={_id} />
            <CommentSection _id={_id} />
            <Footer />
        </>
    )
}

function SpecificThing({ _id }) {
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

    //const imagePath = `src/assets/images/${data.fileName}`;

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {data &&
                <div className="specific-data">
                    <img src={`src/assets/images/${data.fileName}`} alt="" />
                    <h2>{data.name}</h2>
                    <h4>{data.category}</h4>
                    <p>{data.description}</p>
                </div>
            }
        </div>
    )
}

function CommentSection({ _id }) {
    const { isAuthenticated } = useAuth();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [detail, setDetail] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = `http://localhost:5174/comments/${_id}`;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `http://localhost:5174/comments/${_id}`;
        const options = {
            method: "POST",
            headers: {
                "x-access-token": localStorage.getItem("userToken"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: localStorage.getItem("userId"),
                detail
            })
        }
        try {
            const response = await fetch(apiUrl, options);
            if(!response.ok) {
                const errMsg = await response.text();
                throw new Error(errMsg || "Network response was not ok");
            }
        } catch(err) {
            setError(err.message);
        }
    }

    return (
        <div>
            {isAuthenticated ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" maxLength={100} onChange={(e) => setDetail(e.target.value)} required />
                    <input type="submit" value="Comment" />
                </form>
            ) : (<></>)}
            {error && <p>Error: {error}</p>}
            {data && 
                <div>
                    {data.map((comment, index) => (
                        <Comment key={index} comment={comment} />
                    ))}
                </div>
            }
        </div>
    )
}

function Comment({ comment }) {
    return (
        <div>
            <h3>{comment.user.username}</h3>
            <p>{comment.detail}</p>
        </div>
    )
}