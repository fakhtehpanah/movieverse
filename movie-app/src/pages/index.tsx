import { fetchTrendingMovies, Movie } from "@/lib/tmdb";
import { useState } from "react";

export default function Home() {

  const [movies, setMovies] = useState();
  const [showButton, setShowButton] = useState(true);

  const handleClick = async () => {
    const data = await fetchTrendingMovies()
    setMovies(data);
    setShowButton(false)
  }

  return (
    <div className="p-2 bg-black w-full">
    { showButton && (
          <button className="bg-red-700 px-10 py-2 m-5" onClick={handleClick}>click</button>

    )
        
    }
      <div className=" flex flex-col lg:grid lg:grid-cols-3"
    >
      {movies && movies.map((movie) => (
        
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
    </div>
    
  );
}

// export const getServerSideProps = async () => {
//   try {
//     const apiKey = process.env.TMDB_API_KEY || '';
//     const movies = await fetchTrendingMovies(apiKey);
//     return {
//       props: {
//         movies
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         movies: []
//       },
//     }
//   }
// }