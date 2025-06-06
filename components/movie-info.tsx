import { getMovie } from "../lib/api/movie-api";
import styles from "../styles/movie-info.module.css";

const MovieInfo = async ({ id }: { id: string }) => {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    );
}

export default MovieInfo;
