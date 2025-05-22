import { getVideos } from "../lib/api/movie-api";
import styles from "../styles/movie-video.module.css"

const MovieVideos = async ({ id }: { id: string }) => {
    const videos = await getVideos(id);
    return (
        <div className={styles.cont}>
            {videos.map((video) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    );
}

export default MovieVideos;
