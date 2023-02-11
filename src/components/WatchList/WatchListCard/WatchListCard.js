import './watchlistcard.css';
import React from 'react'
import Watchedcardctrl from '../../Watched/WatchedCard/watchedcardctrl/Watchedcardctrl';
const WatchListCard = ({movie}) => {
  return (
    <div className='watchListCard'>
      <img src={movie.Poster} alt="" />
      <h2>{movie.Title}</h2>
      <Watchedcardctrl movie={movie} type="watchlist"/>
    </div>
  )
}

export default WatchListCard