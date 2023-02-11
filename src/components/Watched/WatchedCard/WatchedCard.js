import './watchedcard.css';
import React from 'react'
import Watchedcardctrl from './watchedcardctrl/Watchedcardctrl';

const WatchedCard = ({movie}) => {
  return (
    <div className='watchedCard'>
      <img src={movie.Poster} alt="" />
      <h2>{movie.Title}</h2>
      <Watchedcardctrl movie={movie} type="watched"/>
    </div>
  )
}

export default WatchedCard