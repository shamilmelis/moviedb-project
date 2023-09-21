import React from 'react'
import axios from "axios";
import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Header from "../Header";
import {Link} from "react-router-dom";
import '../AboutMovie/index.css'
import '../AboutMovie/media.css'
import {useNavigate} from "react-router-dom";
import PersonCard from "../Person-Card";

const AboutMovie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState([])
    const [persons, setPersons] = useState([])
    const [crews, setCrews] = useState([])
    const [getPerson, setGetPerson] = useState([])
    const [getCrew, setGetCrew] = useState([])
    const navigate = useNavigate()
    const [time, setTime] = useState(0)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=79ca1377b7e9b242c6278e018919b465&append_to_response=videos,images`)
            .then(res => {
                setMovie(res.data)
                if (movie.runtime) {
                    const getTime = movie.runtime / 60;
                    setTime(getTime)
                }
            })
    }, [])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=79ca1377b7e9b242c6278e018919b465&append_to_response=movie, movies`)
            .then(res => {
                setPersons(res.data.cast)
                persons.map(person => {
                    setGetPerson(person)
                })
                setCrews(res.data.crew)
            })
    }, [])
    const bgPoster = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0,1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: 'cover'
    }
    return (
        <>
            <Header></Header>
            <section className={'about-section'} style={bgPoster}>
                <div className="navigate-container">
                    <div className={'navigate-box'}>
                        <button className={'navigate-buttons'} onClick={() => navigate('/')}>Home</button>
                        <button className={'navigate-buttons'} onClick={() => navigate(-1)}>Back</button>
                        <span className={'navigate-span'}>Movie</span>
                        <span className={'navigate-span'}>{movie.title ? movie.title : 'undefined'}</span>
                    </div>
                </div>
                <div className={'container-about'}>
                    <div className={'row-about'}>
                        <div className={'col-poster'}>
                            <div className={'box-poster'}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path ? movie.poster_path : 'undefiend'}`}
                                    alt=""
                                    className={'box-poster-img'}/>
                            </div>
                        </div>
                        <div className={'col-info'}>
                            <div className={'box-info'}>
                                <h1 className={'box-poster-title'}>{movie.title}
                                    <span
                                        className={'box-poster-year'}>{movie.release_date ? '(' + movie.release_date.slice(0, 4) + ')' : undefined}</span>
                                </h1>
                                <div className={'box-poster-info'}>
                                    <p className={'movie-info'}>{movie.release_date ? movie.release_date.replaceAll('-', '/') + ' ' + '(US)' : undefined}</p>
                                    <p className={'movie-info'}>{movie.genres ? movie.genres.map(g => g.name + ', ') : undefined}</p>
                                    <p className={'movie-info'}>{movie.runtime ? time.toString().slice(0, 1) + 'h' + ' ' + time.toString().slice(2, 3) + 'm' : 'nothing'}</p>
                                </div>
                                <div className={'box-poster-more'}>
                                    <h1 className={'about-movie-tile'}>About Movie</h1>
                                    <div className={'movie-info-box'}>
                                        <div className={'movie-info-inner'}>
                                            <div className={'movie-info-col'}>
                                                <p className={'info-title'}>Release</p>
                                            </div>
                                            <div className={'movie-info-col'}>
                                                <span
                                                    className={'info-value'}>{movie.release_date ? movie.release_date : 'undefined'}</span>
                                            </div>
                                        </div>
                                        <div className={'movie-info-inner'}>
                                            <div className={'movie-info-col'}>
                                                <p className={'info-title'}>Country</p>
                                            </div>
                                            <div className={'movie-info-col'}>
                                                <span
                                                    className={'info-value'}>{movie.production_countries ? movie.production_countries.map(country => country.name + ', ') : 'undefined'}</span>
                                            </div>
                                        </div>
                                        <div className={'movie-info-inner'}>
                                            <div className={'movie-info-col'}>
                                                <p className={'info-title'}>Genre</p>
                                            </div>
                                            <div className={'movie-info-col'}>
                                                <span
                                                    className={'info-value'}>{movie.genres ? movie.genres.map(g => g.name + ', ') : 'undefined'}</span>
                                            </div>
                                        </div>
                                        <div className={'movie-info-inner'}>
                                            <div className={'movie-info-col'}>
                                                <p className={'info-title'}>Tagline</p>
                                            </div>
                                            <div className={'movie-info-col'}>
                                                <span
                                                    className={'tagline-value'}>{movie.tagline ? "«" + movie.tagline + "»" : 'undefined'}</span>
                                            </div>
                                        </div>
                                        <div className={'movie-info-inner'}>
                                            <div className={'movie-info-col'}>
                                                <p className={'info-title'}>Director</p>
                                            </div>
                                            <div className={'movie-info-col'}>
                                                <span
                                                    className={'info-value'}>{persons ? crews.slice(0, 1).map(crew => crew.name) : 'undefined'}</span>
                                            </div>
                                        </div>
                                        <div className={'movie-info-inner'}>
                                            <div className={'movie-info-col'}>
                                                <p className={'info-title'}>Producer</p>
                                            </div>
                                            <div className={'movie-info-col'}>
                                                {
                                                    persons ? crews.slice(0, 10).map(crew => {
                                                        return (
                                                            <span
                                                                className={'info-value'}>{crew.job ? crew.job === "Producer" && crew.name + ', ' : 'undefined'}</span>
                                                        )
                                                    }) : 'undefined'
                                                }
                                            </div>
                                        </div>
                                        <div className={'movie-info-inner'}>
                                            <div className={'movie-info-col'}>
                                                <p className={'info-title'}>Description</p>
                                            </div>
                                            <div className={'movie-info-col'}>
                                                <span className={'descr-value'}>{'«' + movie.overview + '»'}</span>
                                            </div>
                                        </div>
                                        <div className={'movie-info-videos'}>
                                            {
                                                movie.images ? movie.images.backdrops.slice(8, 11).map(image => {
                                                    return (
                                                        <div className={'movie-info-videos-col'}>
                                                            <div className={'movie-info-videos-box'}>
                                                                <img
                                                                    src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                                                                    alt="" width={'100%'} height={'auto'}/>
                                                            </div>
                                                        </div>
                                                    )
                                                }) : 'undefined'
                                            }
                                        </div>
                                        <div className={'box-video'}>
                                            {
                                                movie.videos ? movie.videos.results.slice(0, 1).map(vid => {
                                                    return (
                                                        <iframe src={`https://www.youtube.com/embed/${vid.key}`} frameBorder="0" width={'100%'} height={'240px'}></iframe>
                                                    )
                                                }) : 'undefined'
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'persons-section'}>
                <div className={'persons-box'}>
                    <div className={'persons-inner'}>
                        <p className={'persons-title'}>General Roles</p>
                    </div>
                </div>
                <div className={'persons-container'}>
                    <div className={'persons-row'}>
                        <div className={'col-persons'}>
                            <div className={'persons-box'}>
                                {
                                    persons ?
                                        persons.slice(0, 13).map(person => {
                                            return (
                                                <div className={'col-person'}>
                                                    <Link to={`/actors/${person.id} - ${person.name}`} className={'no-decoration'}>
                                                        <PersonCard person={person}></PersonCard>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                        : 'undefined'
                                }
                            </div>
                        </div>
                        <div className={'col-dataBase'}>
                            <div className={'box-dataBase'}>
                                <div className={'box-dataBase-inner'}>
                                    <p className={'dataBase-title'}>Original Title</p>
                                    <p className={'dataBase-info'}>{movie.original_title}</p>
                                </div>
                                <div className={'box-dataBase-inner'}>
                                    <p className={'dataBase-title'}>Status</p>
                                    <p className={'dataBase-info'}>{movie.status}</p>
                                </div>
                                <div className={'box-dataBase-inner'}>
                                    <p className={'dataBase-title'}>Original Language</p>
                                    <p className={'dataBase-info'}>{movie.original_language}</p>
                                </div>
                                <div className={'box-dataBase-inner'}>
                                    <p className={'dataBase-title'}>Budget</p>
                                    <p className={'dataBase-info'}>{movie.budget ? '$' + movie.budget : 'undefined'}</p>
                                </div>
                                <div className={'box-dataBase-inner'}>
                                    <p className={'dataBase-title'}>Aid</p>
                                    <p className={'dataBase-info'}>{movie.revenue ? '$' + movie.revenue : 'undefined'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMovie