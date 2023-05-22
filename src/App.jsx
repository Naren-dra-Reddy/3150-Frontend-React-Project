import Navbar from './components/Navbar';
import Movie from './components/Movie';
import './App.css'
import Hero from './components/Hero';
import creed from './assets/creed.jpeg'
import prey from './assets/prey.jpg'
import moonlight from './assets/moonlight.jpeg'
import tgfh from './assets/tgfh.jpg'
import tar from './assets/tar.png'
import mib from './assets/mib.jpg'
import Search from './components/Search';
import { genres } from './components/Genres';
import { Action } from '@remix-run/router';
function App() {
  return (
    <div>
      
     <Hero/>
     <div className='genre'>
      <h2>ACTION</h2>
     </div>
     <div className='movie-container'>
       {/* <Movie src={creed} title='Creed' rating='7.6'/>
       <Movie src={prey} title='Prey' rating='6.4'/>
       <Movie src={moonlight} title='Mooonlight' rating='8.2'/>
       <Movie src={tar} title='Tar' rating='4.3'/>
       <Movie src={tgfh} title='Gun Hire' rating='9.0'/>
       <Movie src={mib} title='Men In Black' rating='9.6'/> */}
       {
        genres.ACTION.map(item=>{
          return <Movie src={item.image} title={item.title} rating={item.rating}/>

        })
       }
     </div>

     <div className='genre'>
      <h2>SCI-FI</h2>
     </div>
     <div className='movie-container'>
       {/* <Movie src={creed} title='Creed' rating='7.6'/>
       <Movie src={prey} title='Prey' rating='6.4'/>
       <Movie src={moonlight} title='Mooonlight' rating='8.2'/>
       <Movie src={tar} title='Tar' rating='4.3'/>
       <Movie src={tgfh} title='Gun Hire' rating='9.0'/>
       <Movie src={mib} title='Men In Black' rating='9.6'/> */}
       {
        genres['SCI-FI'].map(item=>{
          return <Movie src={item.image} title={item.title} rating={item.rating}/>

        })
       }
     </div>
     
     <div className='genre'>
      <h2>THRILLER</h2>
     </div>
     <div className='movie-container'> 
       {/* <Movie src={creed} title='Creed' rating='7.6'/>
       <Movie src={prey} title='Prey' rating='6.4'/>
       <Movie src={moonlight} title='Mooonlight' rating='8.2'/>
       <Movie src={tar} title='Tar' rating='4.3'/>
       <Movie src={tgfh} title='Gun Hire' rating='9.0'/>
       <Movie src={mib} title='Men In Black' rating='9.6'/> */}
       {
        genres.THRILLER.map(item=>{
          return <Movie src={item.image} title={item.title} rating={item.rating}/>

        })
       }
     </div>

     <div className='genre'>
      <h2>HORROR</h2>
     </div>
     <div className='movie-container'>
     
       {/* <Movie src={creed} title='Creed' rating='7.6'/>
       <Movie src={prey} title='Prey' rating='6.4'/>
       <Movie src={moonlight} title='Mooonlight' rating='8.2'/>
       <Movie src={tar} title='Tar' rating='4.3'/>
       <Movie src={tgfh} title='Gun Hire' rating='9.0'/>
       <Movie src={mib} title='Men In Black' rating='9.6'/> */}
       {
        genres.HORROR.map(item=>{
          return <Movie src={item.image} title={item.title} rating={item.rating}/>

        })
       }
     </div>
     <div className='genre'>
      <h2>Anime</h2>
     </div>
     <div className='movie-container'>
     
       {/* <Movie src={creed} title='Creed' rating='7.6'/>
       <Movie src={prey} title='Prey' rating='6.4'/>
       <Movie src={moonlight} title='Mooonlight' rating='8.2'/>
       <Movie src={tar} title='Tar' rating='4.3'/>
       <Movie src={tgfh} title='Gun Hire' rating='9.0'/>
       <Movie src={mib} title='Men In Black' rating='9.6'/> */}
       {
        genres.ANIME.map(item=>{
          return <Movie src={item.image} title={item.title} rating={item.rating}/>

        })
       }
     </div>
    </div>

  )
}
    


export default App
