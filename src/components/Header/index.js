import React from 'react'
import '../../components/Header/index.css'
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

const Header = ({movie}) => {
    const [movies, setMovies] = useState([])
    const [input, setInput] = useState("")
    useEffect(() => {
        setMovies(movie)
    }, [movies])

    return (
        <header className={'header'}>
            <div className={'header-container'}>
                <div className={'header-box'}>
                    <Link to={'/'} className={'no-decoration'}>
                        <div className={'header-logo'}>
                            <span className={'header-logo-small'}>The</span>
                            <p className={'header-logo-big'}>TMDB</p>
                        </div>
                    </Link>
                    <div className={'header-links'}>
                        <div className={'genre-links-box'}>
                            <Link to={'/'} className={'genre-main-link no-decoration'}>Films</Link>
                            <div className={'genre-list-box'}>
                                <Link to={'/'} className={'genre-list-links no-decoration'}>Popular</Link>
                                <Link to={'/'} className={'genre-list-links no-decoration'}>Watching Now</Link>
                                <Link to={'/'} className={'genre-list-links no-decoration'}>Soon</Link>
                                <Link to={'/'} className={'genre-list-links no-decoration'}>The Bests</Link>
                            </div>
                        </div>
                        <div className={'genre-links-box'}>
                            <Link to={'/'} className={'genre-main-link no-decoration'}>Serials</Link>
                            <div className={'genre-list-box'}>
                                <Link to={'/'} className={'genre-list-links no-decoration'}>Popular</Link>
                                <Link to={'/'} className={'genre-list-links no-decoration'}>Streaming Now</Link>
                                <Link to={'/'} className={'genre-list-links no-decoration'}>TV</Link>
                                <Link to={'/'} className={'genre-list-links no-decoration'}>The Bests</Link>
                            </div>
                        </div>
                        <div className={'genre-links-box'}>
                            <Link to={'/'} className={'genre-main-link no-decoration'}>People</Link>
                            <div className={'genre-list-box'}>
                                <Link to={'/'} className={'genre-list-links no-decoration'}>Popular People</Link>
                            </div>
                        </div>
                    </div>
                    <div className={'header-search'}>
                        <div className={'search-outer-box'}>
                            <input type="text" className={'search-input'} placeholder={'Искать по названию'} onChange={(event) => setInput(event.target.value)}/>
                            <Link to={`/search/${input}`} className={'search-button'}><i className="fa-solid fa-magnifying-glass"></i></Link>)
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header