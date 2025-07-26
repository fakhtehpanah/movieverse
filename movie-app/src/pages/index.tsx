import { fetchTrendingMovies, Movie } from "@/lib/tmdb";

interface HomeProps {
  movies: Movie[];
}

export default function Home({ movies } : HomeProps) {
  return (
    <div className="p-2 bg-black w-full flex flex-col lg:grid lg:grid-cols-3"
    >
      {movies.map((movie) => (
          <div className="p-2 flex flex-col items-center">
            <div className="text-white border border-yellow-600 rounded p-1 flex flex-col items-center gap-y-5">
              <h2 className="">{movie.title}</h2>
              <h3 className="">{movie.release_date}</h3>
              <img width={300} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
              <p className="">{movie.overview}</p>
            </div>
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