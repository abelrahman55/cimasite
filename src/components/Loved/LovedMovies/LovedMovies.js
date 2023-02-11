import './lovedmovies.css';
import React from 'react'
import * as actions from '../../context/ActionsType';
import {useContextProvider}from '../../context/Contextapi';
const LovedMovies = ({movie}) => {
  const removeloved=useContextProvider();
  return (
    <div className='lovedMovies'>
      <img src={movie.Poster} alt="" />
      <h3>{movie.Title}</h3>
      <div className='loved'>
        <button
        onClick={()=>{
          removeloved.moviesDispatch({
            type:actions.REMOVE_FROM_LOVED_MOVIES,
            payload:movie,
          })
        }}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  )
}

export default LovedMovies;