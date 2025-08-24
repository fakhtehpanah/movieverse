import { getNowPlayingMovies } from '@/api/movies';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
}

function NowPlayingMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNowPlayingMovies()
        .then((data) => setMovies(data))
        .finally(() => setLoading(false));
    }, []);
    if (loading) return <p>loading</p>

  return (

    <div className='bg-red-700 flex flex-col gap-y-5  p-5'>

        <h2 className='bg-blue-600'>Now Playing movies</h2>

            {/* <Swiper
                 modules={[Navigation, Autoplay]}
               navigation
                loop={true}
                speed={800}
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={2.5} // 2 کامل + 1 نیمه
                breakpoints={{
                    640: { slidesPerView: 2.5 }, // موبایل
                    768: { slidesPerView: 3.5 }, // تبلت
                    1024: { slidesPerView: 6 },   // دسکتاپ
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
        > */}

        {movies.map((movie) => (
            <div className='bg-pink-400 flex flex-col gap-y-2 items-center border-b' key={movie.id}>
                <p>{movie.release_date}</p>
                <p>{movie.title}</p>
                <Image className=' bg-yellow-500 object-cover p-3 h-[250px] rounded-3xl'
                    src= {'/messi.jpg'} 
                        width={300} 
                        height={450}
                        alt={'alt'}/>
            </div>
        ))}
        {/* </Swiper> */}
    </div>
  )
}

export default NowPlayingMovies