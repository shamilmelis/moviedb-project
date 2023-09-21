import React from 'react'
import Header from '../../components/Header/index'
import Poster from '../../components/Poster/index'
import Container from "../../components/Container";

const HomePage = ({films}) => {
    return (
        <>
            <Header movie={films}></Header>
            <Poster movie={films}></Poster>
            <Container movie={films}></Container>
        </>
    )
}

export default HomePage