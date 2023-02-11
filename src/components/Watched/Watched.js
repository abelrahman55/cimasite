import './watched.css';
import React from 'react'
import {useContextProvider}from '../context/Contextapi'
import WatchedCard from './WatchedCard/WatchedCard';
const Watched = () => {
  const watchedmovie=useContextProvider();
  return (
    <div className='watched'>
      <div className="container">
        <div className="main-header">
          <h1>watched</h1>
          <span>{watchedmovie.watched.length} movies</span>
        </div>
        <div className='watched-content'>
          {
            watchedmovie.watched.map((movie)=>{
              return(
                <WatchedCard movie={movie}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Watched