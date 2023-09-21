import React from 'react'
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import '../AboutPerson/index.css'
import '../AboutPerson/media.css'
import CardsActorMovies from "../Cards-Actor-Movies";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const AboutPerson = () => {
    const year = new Date().getFullYear().toString()
    const {id} = useParams()
    const navigate = useNavigate()
    const [person, setPerson] = useState([])
    const [personMovies, setPersonMovies] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=79ca1377b7e9b242c6278e018919b465`)
            .then(res => {
                if (res) {
                    setPerson(res.data)
                    console.log(person)
                }
            })
    }, [])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=79ca1377b7e9b242c6278e018919b465`)
            .then(res => {
                if (res) {
                    setPersonMovies(res.data.cast)
                    console.log(personMovies)
                }
            })
    }, [])
    return (
        <>
            <Header></Header>
            <section className={'actor-section'}>
                <div className={'navigate-container'}>
                    <div className={'navigate-box'}>
                        <button className={'navigate-buttons'} onClick={() => navigate(`/`)}>Home</button>
                        <button className={'navigate-buttons'} onClick={() => navigate(-1)}>Back</button>
                        <span className={'navigate-span'}>Actor</span>
                        <span className={'navigate-span'}>{person.name ? person.name : 'undefined'}</span>
                    </div>
                </div>
                <div className={'actor-container'}>
                    <div className={'actor-row'}>
                        <div className={'col-actor-image'}>
                            <div className={'box-actor-image'}>
                                <img src={`https://image.tmdb.org/t/p/original${person.profile_path ? person.profile_path : 'undefined'}`} alt={person.name} className={'actor-image'}/>
                                <div className={'box-actor-info'}>
                                    <h1 className={'actor-info-title'}>Personal Information</h1>
                                    <div className={'box-actor-info-inner'}>
                                        <p className={'inner-mini-info'}>Know For</p>
                                        <p className={'inner-mini-info-value'}>{person.known_for_department ? person.known_for_department : 'undefined'}</p>
                                    </div>
                                    <div className={'box-actor-info-inner'}>
                                        <p className={'inner-mini-info'}>Gender</p>
                                        <p className={'inner-mini-info-value'}>{
                                            person.gender ?
                                                person.gender === 1 ? 'Female' : 'Male'
                                                : 'undefined'
                                        }</p>
                                    </div>
                                    <div className={'box-actor-info-inner'}>
                                        <p className={'inner-mini-info'}>Birth Date</p>
                                        <p className={'inner-mini-info-value'}>{person.birthday ? person.birthday + ' ' + `(${year - person.birthday.toString().slice(0, 4)} age)` : 'undefined'}</p>
                                    </div>
                                    <div className={'box-actor-info-inner'}>
                                        <p className={'inner-mini-info'}>Birth Place</p>
                                        <p className={'inner-mini-info-value'}>{person.place_of_birth ? person.place_of_birth : 'undefined'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-actor-bio'}>
                            <div className={'box-actor-bio'}>
                                <h1 className={'actor-name'}>{person.name}</h1>
                                <div className={'actor-mini-info'}>
                                    <p className={'mini-info'}>Birth Date: <span className={'mini-info-value'}>{person.birthday ? person.birthday : 'undefined'}</span></p>
                                    <p className={'mini-info'}>Birth Place: <span className={'mini-info-value'}>{person.place_of_birth ? person.place_of_birth : 'undefined'}</span></p>
                                </div>
                                <p className={'actor-bio'}>Biography</p>
                                <p className={'actor-bio-text'}>{person.biography ? person.biography : 'undefined'}</p>
                            </div>
                            <div className={'box-actor-films'}>
                                <h1 className={'actor-films-title'}>Know for Movies</h1>
                                <div className={'row-actor-films'}>
                                    {
                                        personMovies.map(movie => {
                                            return (
                                                <div className={'col-actor-films'}>
                                                    <Link to={`/movie/${movie.id}`} className={'no-decoration'}>
                                                        <CardsActorMovies movie={movie}></CardsActorMovies>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPerson