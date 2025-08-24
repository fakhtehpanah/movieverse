import NowPlayingMovies from "@/components/pages/movies/nowPlayingMovies/NowPlayingMovies";
import OnAirSeries from "@/components/pages/series/onAirSeries/OnAirSeries";


export default function Home() {
  return (
    <div>
      <NowPlayingMovies/>
      <OnAirSeries/>
    </div>
  )
}