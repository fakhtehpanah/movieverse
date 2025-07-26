export interface Movie {
    id: number;
    title: string;
    release_date?: string;
    overview?: string;
    poster_path?: string
}

interface TMDBResponse {
  results: Movie[];
}


export async function fetchTrendingMovies(apiKey: string): Promise<Movie[]> {
    const res = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    
    if(!res.ok) {
        throw new Error ('failed to fetch trending movies');
    }
    const data = (await res.json() as TMDBResponse);

    return data.results || []
    
}  