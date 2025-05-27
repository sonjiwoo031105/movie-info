import { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import { getMovie } from "../../../../lib/api/movie-api";
import MovieInfo from "../../../../components/movie-info";
import MovieCredits from "../../../../components/movie-credits";

type IParams = Promise<{ id: string }>;

export const generateMetadata = async (props: { params: IParams}) => {
    const params = await props.params;
    const movie = await getMovie(params.id);

  return {
    title: movie.title,
  };
};

const MovieDetailPage = async (props: { params: IParams}) => {
    const params = await props.params;
    const id = params.id;
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={params.id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie credits</h1>}>
                <MovieCredits id={params.id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={params.id} />
            </Suspense>
        </div>
    )
}

export default MovieDetailPage;
