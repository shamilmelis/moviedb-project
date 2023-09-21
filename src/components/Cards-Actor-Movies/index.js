import React from 'react'
import '../Cards-Actor-Movies/index.css'
const CardsActorMovies = ({movie}) => {
    return (
        <div className={'inner-actor-films'}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path ? movie.poster_path : 'undefined'}`} alt={movie.title} className={'actor-movie-img'}/>
            </div>
            <p className={'actor-film-name'}>{movie.title}</p>
        </div>
    )
}

export default CardsActorMovies