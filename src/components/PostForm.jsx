import { useEffect, useState } from "react";
import imgPlaceholder from "../assets/img/img-placeholder.jpg";
import styles from "../styles/PostForm.module.css";

export default function PostForm({ savePost, post }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [gamePlaytime, setGamePlaytime] = useState("");
    const [numberOfPlayers, setNumberOfPlayers] = useState("");
    const [recommendedAge, setRecommendedAge] = useState("");
    const [description, setDescription] =useState("");
    const [vestergadeShelfIndex, setVestergadeShelfIndex] = useState("");
    const [aalborgShelfIndex, setAalborgShelfIndex] = useState("");
    const [fredensgadeShelfIndex, setFredensgadeShelfIndex] = useState("");
    const [koldingShelfIndex, setKoldingShelfIndex] = useState("");
    const [tutorialUrl, setTutorialUrl] = useState("");

    useEffect(() => {
        if (post) {
            // if post, set the states with values from the post object.
            // The post object is a prop, passed from UpdatePage
            setTitle(post.title);
            setGenre(post.genre);
            setImageFile(post.imageFile);
            setGamePlaytime(post.gamePlaytime);
            setNumberOfPlayers(post.numberOfPlayers);
            setRecommendedAge(post.recommendedAge);
            setDescription(post.description);
            setVestergadeShelfIndex(post.vestergadeShelfIndex);
            setAalborgShelfIndex(post.aalborgShelfIndex);
            setFredensgadeShelfIndex(post.fredensgadeShelfIndex);
            setKoldingShelfIndex(post.koldingShelfIndex);
            setTutorialUrl(post.tutorialUrl);

        }
    }, [post]); // useEffect is called every time post changes.

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            // create a new object to store the value from states / input fields
            title: title,
            genre: genre,
            gamePlaytime: gamePlaytime,
            imageFile: imageFile,
            numberOfPlayers: numberOfPlayers,
            recommendedAge: recommendedAge,
            description: description,
            vestergadeShelfIndex: vestergadeShelfIndex,
            aalborgShelfIndex: aalborgShelfIndex,
            fredensgadeShelfIndex: fredensgadeShelfIndex,
            koldingShelfIndex: koldingShelfIndex,
            tutorialUrl: tutorialUrl,
            
        };

        const validForm = Object.values(formData).every(value => value.trim() !== "");
            if (validForm) {
            // if all fields/ properties are filled, then call savePost
            savePost(formData);
            
        } else {
            // if not, set errorMessage state.
            setErrorMessage("Please, fill in all fields.");
        }
    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.PostFormWrapper}>
                
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.formItem}>
                        Board Game Name
                        <input type="text" value={title} placeholder="Type a title" onChange={e => setTitle(e.target.value)} />
                    </label>
                    <label className={styles.formItem}>
                        <h4>Genre</h4>
                        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option value="">Select genre</option>
                        <option value="strategy">Strategy</option>
                        <option value="family">Family</option>
                        <option value="party">Party</option>
                        <option value="mistery">Mistery</option>
                        <option value="card">Card</option>
                        <option value="team">Team</option>
                        </select>
                    </label>
                    <label className={styles.formItem}>
                        Average Game Playtime
                        <input type="text" value={gamePlaytime} placeholder="Enter the average game playtime" onChange={e => setGamePlaytime(e.target.value)} />
                    </label>
                    <label className={styles.formItem}>
                        Number of Players
                        <input type="text" value={numberOfPlayers} placeholder="Enter the number of players" onChange={e => setNumberOfPlayers(e.target.value)} />
                    </label>
                    <label className={styles.formItem}>
                        Recommended Age
                        <input type="text" value={recommendedAge} placeholder="Enter the minimum recommended age" onChange={e => setRecommendedAge(e.target.value)} />
                    </label>
                    <label className={styles.formItem}>
                        Description
                        <textarea
                            value={description}
                            placeholder="Type a body text"
                            onChange={(e) => setDescription(e.target.value)}
                            className={styles.input}
                            rows={6}
                            />
                    </label>
                    <label className={styles.formItem}>
                        Video tutorial URL
                        <input type="text" value={tutorialUrl} placeholder="Enter link to video" onChange={e => setTutorialUrl(e.target.value)} />
                    </label>
                    <label className={styles.formItem} >
                        Image URL
                        <input
                            type="text"
                            value={imageFile}
                            placeholder="Paste an image URL"
                            onChange={e => setImageFile(e.target.value)}
                        />
                        {/* Conditional rendering for the image */}
                        <img
                            className="image-preview"
                            src={imageFile || imgPlaceholder} // Use imgPlaceholder if imageFile is empty
                            alt="Choose"
                            onError={(event) => {
                                // Fallback to placeholder if the image URL is invalid
                                event.target.src = imgPlaceholder;
                            }}
                        />
                    </label>
                    Location on shelves
                    <div className={styles.shelvesLocationWrapper}>
                        
                        <label className={styles.shelvLocation}>
                            In Vestergade
                            <input type="text" value={vestergadeShelfIndex} placeholder="Shelf index" onChange={e => setVestergadeShelfIndex(e.target.value)} />
                        </label>
                        <label className={styles.shelvLocation}>
                            In Aalborg
                            <input type="text" value={aalborgShelfIndex} placeholder="Shelf index" onChange={e => setAalborgShelfIndex(e.target.value)} />
                        </label>
                        <label className={styles.shelvLocation}>
                            In Fredensgade
                            <input type="text" value={fredensgadeShelfIndex} placeholder="Shelf index" onChange={e => setFredensgadeShelfIndex(e.target.value)} />
                        </label>
                        <label className={styles.shelvLocation}>
                            In Kolding
                            <input type="text" value={koldingShelfIndex} placeholder="Shelf index" onChange={e => setKoldingShelfIndex(e.target.value)} />
                        </label>
                    </div>
                    <p className="text-error">{errorMessage}</p>
                    <button type="submit" className={styles.saveBtn}>Save</button>
                </form>

            </div>
            
        </div>
       
    );
}