import React from 'react'
import '../Poster/index.css'

const Poster = ({movie}) => {
    return (
        <>
            {
                movie.slice(0, 1).map(mov => {
                    return (
                        <section className={'section-bg'} style={{background: `linear-gradient(rgba(255,255,255,0.1), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original${mov.backdrop_path})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className="poster-box">
                                <div className={'inner-poster'}>
                                    <p className={'poster-name'}>{mov.title}</p>
                                    <div className={'poster-information'}>
                                        <div className={'poster-review'}>
                                            <span className={'review-star'}><i className="fa-solid fa-star"></i></span>
                                            <p className={'poster-review-value'}>{mov.vote_average}</p>
                                            <p className={'poster-review-nums'}>{mov.vote_count}</p>
                                        </div>
                                        <div className={'poster-data'}>
                                            <p className={'poster-data-value'}></p>
                                            <p className={'poster-data-value'}></p>
                                            <p className={'poster-data-value'}>{mov.release_date}</p>
                                        </div>
                                    </div>
                                    <p className={'poster-descr'}>{mov.overview}</p>
                                    <div className={'poster-button'}>
                                        <button className={'video-button'}><span><i className="fa-solid fa-play"></i></span>PLAY
                                            NOW
                                        </button>
                                        <button className={'trailer-button'}>TRAILER</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </>
    )
}

export default Poster