import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";


export default function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const url = `https://spilcafeen-c14e8-default-rtdb.europe-west1.firebasedatabase.app//posts.json`;
            const response = await fetch(url);
            const data = await response.json();
            const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            setPosts(postsArray);
        }
        getPosts();
    }, []);

    return (
        <section className="page">
            <h1>Hello world!!!!!</h1>
        </section>
    );
}
