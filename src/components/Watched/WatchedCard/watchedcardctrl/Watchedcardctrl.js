import React from 'react'
import './watchedcardctrl.css';
import {useContextProvider}from '../../../context/Contextapi';
import * as actions from '../../../context/ActionsType'
const Watchedcardctrl = ({movie,type}) => {
  const remove=useContextProvider();
  return (
    <div className='ctrl-card'>
      {
        type==="watchlist" &&(
          <>
            <button
            onClick={()=>{
              remove.moviesDispatch({
                type:actions.Add_MOVIE_TO_WATCHED, payload:movie,
              })
            }}
            >
              <i class="fa-solid fa-eye"></i>
            </button>
            <button
              onClick={()=>{
                remove.moviesDispatch({
                  type:actions.REMOVE_MOVIE_FROM_WATCHLIST, payload:movie.imdbID,
                })
              }}
            >
              <i className='fa-fw fa fa-times'/>
            </button>
          </>
        )
      }
      {
        type==="watched" &&(
          <>
            <button
            onClick={()=>{
              remove.moviesDispatch({
                type:actions.MOVE_TO_WATCHLIST,
                payload:movie,
              })
            }}
            >
              <i class="fa-solid fa-eye-slash"></i>
            </button>
            <button
            onClick={()=>{
              remove.moviesDispatch({
                type:actions.REMOVE_MOVIE_FROM_WATCHED,
                payload:movie.imdbID,
              })
            }}
            >
              <i className='fa-fw fa fa-times'/>
            </button>
          </>
        )
      }
    </div>
  )
}

export default Watchedcardctrl