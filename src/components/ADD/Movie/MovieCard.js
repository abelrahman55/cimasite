import './moviecard.css';
import * as actions from '../../context/ActionsType';
import React from 'react'
import {useContextProvider}from '../../context/Contextapi';
const MovieCard = ({movie}) => {
  
  const movieaction=useContextProvider();

  console.log(movieaction)
    //for rejected movies:
    const rej=movieaction.rejected.find((mov)=>mov.imdbID ===movie.imdbID);
    const rejectmovie= rej ?true:false;

    // for loved movies :
    const lovedMovie=movieaction.loved.find((mov)=>mov.imdbID === movie.imdbID);



    const loved= lovedMovie ? true :false;

    const banLoved= rej ?true:false;

    
  const storedMovie = movieaction.watchlist.find((o)=> o.imdbID === movie.imdbID) // movie.id === movie.id in watchlist return this object
  const storedMovieWatched = movieaction.watched.find((o)=> o.imdbID === movie.imdbID)

  const watchlistDisabled = storedMovie ? true : 
        storedMovieWatched ? true : false 

  const watchedDisabled = storedMovieWatched ? true : false   
  
  

  return (
    <div className='movie-card'>
      <div className="movie-img">
        <img src={movie.Poster} alt="" />
      </div>
      <div className='movie-information'>
        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
        <div className="controls-btn">
          <button className='btn'
          disabled={watchlistDisabled}
          onClick={()=>movieaction.moviesDispatch(
            {type:actions.Add_MOVIE_TO_WATCHLIST,payload:movie}
          )}
          >
            ADD TO WATCHEDLIST
          </button>
          <button className='btn'
          disabled={watchedDisabled}
          onClick={()=>movieaction.moviesDispatch({
            type:actions.Add_MOVIE_TO_WATCHED,
            payload:movie
          })}
          >
            ADD TO WATCHED
          </button>
        </div>
        <div className='fealings'>
            <button
            
            disabled={loved}
            onClick={()=>{
              movieaction.moviesDispatch(
                {
                  type:actions.MOVE_TO_LOVED_MOVIES,
                  payload: movie,
                }
              )
            }}
            >
              <i className="fa-solid fa-heart"></i>
            </button>
            <button
            disabled={rejectmovie}
            onClick={()=>{
              movieaction.moviesDispatch({
                type:actions.REJECT_MOVIE,
                payload:movie
              })
            }}
            >
              <i className="fa-solid fa-ban"></i>
            </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;