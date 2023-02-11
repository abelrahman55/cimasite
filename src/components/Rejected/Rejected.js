import './rejected.css';
import React from 'react'
import {useContextProvider} from '../context/Contextapi';
import RejectedMovie from './RejectedMovie/RejectedMovie';
const Rejected = () => {
  const RejectedMovies=useContextProvider();
  return (
    <div className='rejected'>
      <div className="container">
        <div className="main-header">
          <h1>Rejected Movies</h1>
        </div>
        <div className='rejected-content'>
          {
            RejectedMovies.rejected.map((rejmovie)=>{
            return  <RejectedMovie rejmovie={rejmovie} key={rejmovie.imdbID}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Rejected