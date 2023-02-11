import './rejectedmovie.css';
import React from 'react';
import * as actions from "../../context/ActionsType";
import {useContextProvider}from '../../context/Contextapi';
const RejectedMovie = ({rejmovie}) => {
  const removeject=useContextProvider();
  return (
    <div className='rejectedMovie'>
      <img src={rejmovie.Poster} alt="" />
      <h2>{rejmovie.Title}</h2>
      <button
      onClick={()=>{
        removeject.moviesDispatch(
          {type:actions.REMOVE_FROM_REJECTED_MOVIES,payload:rejmovie}
        )
      }}
      >
        <i className="fa-solid fa-ban"></i>
      </button>
    </div>
  )
}

export default RejectedMovie