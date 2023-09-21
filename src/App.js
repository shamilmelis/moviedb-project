import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home-Page";
import AboutMovie from "./components/AboutMovie";
import AboutPerson from "./components/AboutPerson";
import SearchPage from "./pages/Search-Page";
function App() {
  const [films, setFilms] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=79ca1377b7e9b242c6278e018919b465')
            .then(res => {
                setFilms(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])
  return (
    <Routes>
        <Route path='/' element={<HomePage films={films}/>}></Route>
        <Route path='/movie/:id' element={<AboutMovie/>}></Route>
        <Route path='/actors/:id' element={<AboutPerson/>}></Route>
        <Route path='/search/:name' element={<SearchPage/>}></Route>
    </Routes> 
  );
}

export default App;
