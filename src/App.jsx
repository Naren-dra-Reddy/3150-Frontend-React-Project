import { useState } from 'react'
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import './App.css'
import Hero from './components/Hero';
import MovieNotFound from './components/MovieNotFound';
import {genres} from './components/genres'

function App() {
  const [movieList,setMovieList]=useState(genres["Anime"])
  const [genre,setGenre]=useState("Anime")
  function handleChange(e){
    setMovieList(genres[e.target.value])
    setGenre(e.target.value)
  }
  function search(){
    const movieName=document.getElementById("searchInput").value;
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
  
  setMovieList(tempMovieList)
    }
}
  

  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className='movie-container'>
     <input type="text" name="" id="searchInput" className='search' placeholder='Search'/> 
     <button className='search-btn' onClick={search}>search</button>
     <select name="" id="" className="Genre" placeholder="Please select" onChange={handleChange}>
            <option value="Anime">Anime</option>
            <option value="Drama">Drama</option>
            <option value="Hollywood">Hollywood</option>
            <option value="Horror">Horror</option>
        </select>  
        {/*<h1 className='genre'>{genre}</h1>*/}
        {
          movieList.length!=0 && movieList.map(item=>{
            return <Movie key={item.id} src={item.image} title={item.title} rating={item.rating}/>
          })
        } 
        {
          movieList.length==0 && <MovieNotFound/>
        }
        
     </div>
    </div>
  )
}


export default App
