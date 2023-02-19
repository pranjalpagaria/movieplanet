import React, { useEffect } from "react";
import { useState } from "react";
import './App.css'
import Moviecard from "./Moviecard";
import SearchIcon from './search.svg'

// const API_URL = 'http://www.omdbapi.com?apikey=fb728154';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=fb728154';



// const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a"';



export default function App() {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');


  const searchmovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`)
    const data = await response.json();
    console.log(data)
    setmovies(data.Search);
  }

  useEffect(() => {
    searchmovies(searchTerm)

  }, [])

  return (
    <div className="app">

      <h1>MoviePlanet</h1>

      <div className="search">
        <input type="text" placeholder="Search for movies"
          value={searchTerm} onChange={(e) => { setsearchTerm(e.target.value) }} />
        <img src={SearchIcon} alt="Search" onClick={() => { searchmovies(searchTerm) }} />
      </div>

      {
        movies?.length > 0
          ? (<div className="container">
            {
              movies.map((movie) => {
                return <Moviecard movie={movie} />
              })
            }
          </div>
          ) : (
            <div className="empty">
              <h2>"No elements found"</h2>
            </div>
          )

      }



    </div>
  );
}

