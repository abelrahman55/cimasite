import './header.css';
import React from 'react'
import {NavLink}from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='logo'>
          <NavLink to={'/'}>Movies</NavLink>
        </div>
        <div className='links'>
          <NavLink to={'/'}>Watch List</NavLink>
          <NavLink to={'/Watched'}>Watched</NavLink>
          <NavLink to={'/loved'}>Loved</NavLink>
          <NavLink to={'/rejected'}>Rejected</NavLink>
          <NavLink className="btn" to='/add'>ADD</NavLink>
        </div>

      </div>
    </div>
  )
}

export default Header