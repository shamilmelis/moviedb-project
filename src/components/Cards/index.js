import React from 'react'
import '../Cards/index.css'
const Cards = ({films}) => {
    return (
            <div className={'box-cards'}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${films.poster_path}`} alt="" className={'cards-img'}/>
                </div>
                <p className={'cards-title'}>{films.title}</p>
            </div>
    )
}

export default Cards