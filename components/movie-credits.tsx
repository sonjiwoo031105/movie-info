import { getCredits } from "../lib/api/movie-api";
import styles from "../styles/movie-credits.module.css";

const MovieCredits = async ({ id }: { id: string }) => {
    const credits = await getCredits(id);
    const filteredCredits = credits.filter((credit) => credit.profile_path);
    return (
        <div className={styles.container}>
            {filteredCredits.map((credit) => (
                <div className={styles.profile_box}>
                    <img 
                        src={credit.profile_path} 
                        className={styles.profile} 
                        alt={credit.name} 
                    />
                    <div>{credit.name}</div>
                </div>
            ))}
        </div>
    );
}

export default MovieCredits;
