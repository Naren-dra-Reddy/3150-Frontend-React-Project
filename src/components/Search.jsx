import React from 'react'
import { useState } from "react";
import {genres} from './Genres'
import Movie from './Movie';
import search from '../assets/search.svg'
import SearchPage from '../SearchPage';
import Navbar from './Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function route(){
  return( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<SearchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>  
);
}

function Search() {
    const [movieList,setMovieList]=useState([])
    const [genre,setGenre]=useState("")
    function handleChange(e){
      setMovieList(genres[e.target.value])
      setGenre(e.target.value)
    } 
    function searchMovie(){
      const movieName=document.getElementById("searchInput").value;
      console.log(movieName)
      if(movieName){
        const values = Object.values(genres)
      console.log(values[0])
      const tempMovieList = []
      values.forEach(value=>{
        value.forEach(movie => 
          {
            if(movie.title.toLowerCase().indexOf(movieName.toLowerCase())!=-1){
              tempMovieList.push(movie)
            }
          }
        )  
      })
    
    setMovieList(tempMovieList);
      }
    }
  return (    
    <div className='sp'>
        {/* <form onSubmit={route} >  */}
        <div className='s'>
         <div className='search-container'>
          <input type="text" name="" id="searchInput" className='search' placeholder='Search'/> 
          <button type="submit" className='search-btn' onClick={searchMovie}>
            <img src={search} width="30px " className='search-img'></img>
          </button>
          <div className='select'>
            <select name="Genre" id="genre" className="genre-select"  onChange={handleChange}>
              <option value="">--Genre--</option>
              <option value="ACTION">ACTION</option>
              <option value="SCI-FI">SCI-FI</option>
              <option value="THRILLER">THRILLER</option>
              <option value="HORROR">HORROR</option>
              <option value="ANIME">ANIME</option>
            </select>  
            </div>
        </div>     
        </div>
        {/* </form> */}
{console.log(movieList)}

        <div className='display'>
         {/*<h1 className='genre'>{genre}</h1>*/}
         {
          movieList.length != 0 && movieList.map(item => {
            return <Movie key={item.id} src={item.image} title={item.title} rating={item.rating} />
          })
        }
        {/* {
          movieList.length == 0 && <MovieNotFound />
        } */}
        </div>
        </div>  
  )
}

export default Search