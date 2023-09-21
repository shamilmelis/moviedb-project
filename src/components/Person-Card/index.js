import React from 'react'
import '../Person-Card/index.css'
import UndefinedImg from '../../assets/notFoundpng.jpg'
const PersonCard = ({person}) => {
    return (
            <div className={'box-person'}>
                <div>
                    {person.profile_path ? <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} className={'person-img'}/> : <img src={UndefinedImg} alt={person.name} className={'undefined-img'}/>}
                </div>
                <p className={'person-name'}>{person.name}</p>
                <p className={'character-name'}>{person.character}</p>
            </div>
    )
}

export default PersonCard