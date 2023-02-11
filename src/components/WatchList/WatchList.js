import './watchlist.css';
import React from 'react'
import {useContextProvider} from '../context/Contextapi';
import WatchListCard from './WatchListCard/WatchListCard';
const WatchList = () => {
  const movielist=useContextProvider();
  return (
    <div className='watch-list'>
      <div className="container">
        <div className='main-header'>
          <h1>watchlist</h1>
          <span>{movielist.watchlist.length} movies</span>  
        </div>
        <div className='watch-list-content'>
          {
            movielist.watchlist.map((movie)=>{
              return(
                <WatchListCard movie={movie} key={movie.imdbID}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default WatchList