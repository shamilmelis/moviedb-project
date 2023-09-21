import React from 'react'
import '../Search-Page/index.css'
import '../Search-Page/media.css'
import Header from "../../components/Header";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Container from "../../components/Container";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
const SearchPage = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const [films, setFilms] = useState([])
    const [actors, setActors] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=79ca1377b7e9b242c6278e018919b465`)
            .then(res => {
                setFilms(res.data.results)
                console.log(films)
            })
            .catch(err => console.log(err))
    }, [films])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/person?query=${name}&api_key=79ca1377b7e9b242c6278e018919b465`)
            .then(res => {
                setActors(res.data.results)
                console.log(actors)
            })
            .catch(err => console.log(err))
    }, [actors])
    return (
        <>
            <Header></Header>
            <section className={'search-section'}>
                <div className={'navigate-container'}>
                    <div className={'navigate-box'}>
                        <button className={'navigate-buttons'} onClick={() => navigate(`/`)}>Home</button>
                        <button className={'navigate-buttons'} onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
                <div className={'search-container'}>
                    <div className={'search-box'}>
                        <div className={'search-box-inner'}>
                            <p className={'total-search-title'}>Все по запросу:</p>
                            <span className={'total-search-value'}>{name}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'actors-section'}>
                <div className={'actors-container'}>
                    <div className={'actors-row'}>
                        {
                            actors.map(actor => {
                                return (
                                    <div className={'col-actors'}>
                                        <Link to={`/actors/${actor.id}`} className={'no-decoration'}>
                                            <div className={'box-actors'}>
                                                <div>
                                                    <img src={`https://image.tmdb.org/t/p/original${actor.profile_path ? actor.profile_path : 'undefined'}`} alt={actor.name} width={'100%'} height={'auto'}/>
                                                </div>
                                                <p className={'actors-name'}>{actor.name}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Container movie={films}></Container>
        </>
    )
}

export default SearchPage