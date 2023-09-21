import React from 'react'
import '../Container/index.css'
import '../Container/media.css'
import Cards from "../Cards";
import {Link} from "react-router-dom";
const Container = ({movie}) => {
    return (
        <section className={'cards-section'}>
            <div className={'container-cards'}>
                <div className={'row-cards'}>
                    {
                        movie.map(films => {
                            return (
                                <div className={'col-cards'}>
                                    <Link to={`/movie/${films.id}`} key={films.id} className={'no-decoration'}>
                                        <Cards films={films}></Cards>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Container