import { useNavigate } from "react-router-dom";
import placeholder from "../assets/img/img-placeholder.jpg";
import styles from "../styles/PostCard.module.css"

export default function PostCard({ post }) {
    const navigate = useNavigate();

    /**
     * handleClick is called when user clicks on the Article (PostCard)
     */
    function handleClick() {
        navigate(`posts/${post.id}`);
    }

    return (
        <article onClick={handleClick} className={styles.wrapper}>

            {post.imageFile.includes("undefined") ? (
                <img src={placeholder} alt="Placeholder image" />

            ) : (
                <img src={post.imageFile} alt={post.title} />
            )
            }
            <div className={styles.postInfo}>
                <h2>{post.title}</h2>
                <h3>Average Game Playtime: {post.gamePlaytime}</h3>
                <h3>Number of players: {post.numberOfPlayers}</h3>
                <h3>Recommended Age: {post.recommendedAge}</h3>
                <h3>In Vestergade: {post.vestergadeShelfIndex}</h3>
                <h3>In Aalborg: {post.aalborgShelfIndex}</h3>
                <h3>In Fredensgade: {post.fredensgadeShelfIndex}</h3>
                <h3>In Kolding: {post.koldingShelfIndex}</h3>
            </div>
            

        </article>
    );
}
