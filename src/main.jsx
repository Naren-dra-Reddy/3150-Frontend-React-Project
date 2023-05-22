import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Movie from './MoviePage.jsx'
import Tv from './TVSeriesPage.jsx'
import About from './AboutPage.jsx'
import Search from './SearchPage.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-mono font-bold text-lg'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<App />} />
          <Route path="movies" element={<Movie />} />
          <Route path="tvseries" element={<Tv />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
    </div>
  </React.StrictMode>,
)
