import React from 'react'
const image_base_url = "https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer'>
    <img
      src={image_base_url + movie.backdrop_path}
      className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400  "

    />
    <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{movie.title}</h2>
  </section>
  )
}

export default HrMovieCard