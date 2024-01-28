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
                <div className="specific-thing">
                    <img className="specific-image" src={`/src/assets/images/${data.fileName}`} alt="" />
                    <h2 className="specific-name">{data.name}</h2>
                    <h4 className="specific-category">{data.category}</h4>
                    <p className="specific-description">{data.description}</p>
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
                method: "GET",
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

    const handleSubmit = async () => {
        const apiUrl = `http://localhost:5174/comments/${_id}`;
        const options = {
            method: "POST",
            headers: {
                "x-access-token": localStorage.getItem("userToken"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: sessionStorage.getItem("userId"),
                username: sessionStorage.getItem("userName"),
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
                <form className="comment-form" onSubmit={handleSubmit}>
                    <input className="comment-input" type="text" maxLength={100} onChange={(e) => setDetail(e.target.value)} required />
                    <input className="comment-submit" type="submit" value="Comment" />
                </form>
            ) : (<></>)}
            {error && <p>Error: {error}</p>}
            {data && 
                <div className="comments">
                    {[...data].reverse().map((comment, index) => (
                        <Comment key={index} comment={comment} />
                    ))}
                </div>
            }
        </div>
    )
}

function Comment({ comment }) {
    return (
        <div className="comment">
            <h3 className="comment-username">{comment.username}</h3>
            <p className="comment-date">{comment.commentedAt}</p>
            <p className="comment-detail">{comment.detail}</p>
        </div>
    )
}