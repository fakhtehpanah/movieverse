export const getNowPlayingMovies = async () => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    
    if (!apiKey) throw new Error("API KEY is missing!");

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    if (!res.ok) {
        throw new Error ('failed fetch')
    }

    const data = await res.json();
    return data.results;

}