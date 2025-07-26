import { fetchTrendingMovies, Movie } from "@/lib/tmdb";

interface HomeProps {
  movies: Movie[];
}

export default function Home({ movies } : HomeProps) {
  return (
    <div
    >
      {movies.map((movie) => (
        <div>

          <h2>{movie.title}</h2>
          <h3>{movie.release_date}</h3>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const apiKey = process.env.TMDB_API_KEY || '';
    const movies = await fetchTrendingMovies(apiKey);
    return {
      props: {
        movies
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movies: []
      },
    }
  }
}