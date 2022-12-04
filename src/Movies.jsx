import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';
const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

function Movies() {
    const {loading, movies} = useGlobalContext();
    if(loading){
        return <div className='loading'></div>
    }
  return (
    <section className='movies'>
        {movies.map((movie) => {
            const {imdbID: id, Poster: poster, Title: title, Year: year} = movie;
            return (
                <Link to={`/movie/${id}`} key={id} className="movie">
                    <article>
                        <img src={poster === "N/A" ? url: poster} alt={title} />
                    </article>
                    <div className='movie-info'>
                        <h4 className='title'>{title}</h4>
                        <p>{year}</p>
                    </div>
                </Link>
            )
        })}
    </section>
  )
}

export default Movies