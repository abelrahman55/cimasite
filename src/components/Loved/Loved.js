import './loved.css';
import React from 'react'
import {useContextProvider}from '../context/Contextapi';
import LovedMovies from './LovedMovies/LovedMovies';
const Loved = () => {
  const lovedmovies=useContextProvider();
  return (
    <div className='loved'>
      <div className="container">
        <div className="main-header">
          <h1>Loved Movies</h1>
        </div>
        <div className='loved-content'>
          {
            lovedmovies.loved.map((lovemovie)=>{
              return(
                <LovedMovies movie={lovemovie} key={lovemovie.imdbID}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Loved