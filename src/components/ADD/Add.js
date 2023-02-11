import React, { useEffect } from 'react';
import { useState } from 'react';
import './add.css';
import axios from 'axios'
import MovieCard from './Movie/MovieCard';
const Add = () => {
const [serachvalue,setserachvalue]=useState("");
const [Movies, setMovies] = useState([]);
useEffect(()=>{
  axios.get(`http://www.omdbapi.com/?s=${serachvalue}&apikey=c11228e8`)
.then((res)=>{
  if(res.data.Search){
    setMovies(res.data.Search);
  }
}).catch((error)=>console.log(error))
},[serachvalue]);
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-seach'>
          <input 
          type="text"
          placeholder='search...'
          value={serachvalue}
          onChange={(e)=>{
            setserachvalue(e.target.value);
          }}
          />
        </div>
        <div className='add-content'>
          {
            Movies.map((movie)=>{
              return(
                <MovieCard movie={movie} key={movie.imdbID}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Add