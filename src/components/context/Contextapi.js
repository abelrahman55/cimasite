import React, { createContext, useContext, useReducer,useEffect } from 'react';
import { reducer } from './reducer';
const intialstate={
watchlist:localStorage.getItem("watchlist")
 ? JSON.parse(localStorage.getItem("watchlist"))
 :[],
watched:localStorage.getItem("watched")
? JSON.parse(localStorage.getItem("watched"))
:[],
loved:localStorage.getItem("love") 
? JSON.parse(localStorage.getItem("love"))
:[],
rejected:localStorage.getItem("rejecte")
? JSON.parse(localStorage.getItem("rejecte"))
:[]
}
export const ContextProvider=createContext(intialstate);
const Contextapi = ({children}) => {
  const [state,dispatch]=useReducer(reducer,intialstate);
  useEffect(()=>{
    localStorage.setItem("watchlist",JSON.stringify(state.watchlist));
    localStorage.setItem("watched",JSON.stringify(state.watched));
    localStorage.setItem("love",JSON.stringify(state.loved));
    localStorage.setItem("rejecte",JSON.stringify(state.rejected));
    // localStorage.setItem("loved",JSON.stringify(state.loved));
    // localStorage.setItem("rejected",JSON.stringify(state.rejected));
  },[state])
  return (
    <ContextProvider.Provider value={{
      watchlist:state.watchlist,
      watched:state.watched,
      loved:state.loved,
      rejected:state.rejected,
      moviesDispatch:dispatch
    }}>
      {children}
    </ContextProvider.Provider>
  )
}

export default Contextapi;
export const useContextProvider=()=>{
  return useContext(ContextProvider);
}