import * as actions from './ActionsType';
export const reducer=(state,action)=>{
  switch(action.type){
    case actions.Add_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchlist:[action.payload,...state.watchlist],
      };
      case actions.REMOVE_MOVIE_FROM_WATCHLIST:
        return {
          ...state,
          WatchList: state.watchlist.filter((movie)=>{
          return  movie.imdbID !== action.payload;
          }),
        }
      case actions.MOVE_TO_WATCHLIST:
        return {
          ...state,
          watched:state.watchlist.filter(
            (movie)=>movie.imdbID !==action.payload.imdbID
            ),
          watchlist:[action.payload,...state.watchlist]
        };
        case actions.Add_MOVIE_TO_WATCHED:
          return {
            ...state,
            watchlist:state.watchlist.filter(
              (movie)=>movie.imdbID !== action.payload.imdbID,
              ),
            watched:[action.payload,...state.watched]  
          } ;
        case actions.REMOVE_MOVIE_FROM_WATCHED:
          return {
            ...state,
            watched:state.watched.filter(
              (movie)=>movie.imdbID !== action.payload
            )
          } ;
          case actions.MOVE_TO_LOVED_MOVIES:
            return{
              ...state,
              loved:[action.payload,...state.loved]
            } ;  
        case actions.REMOVE_FROM_LOVED_MOVIES :
          return{
            ...state,
            watchlist:state.watchlist.filter((movie)=>movie.imdbID !== action.payload.imdbID),
            loved:state.loved.filter((movie)=>movie.imdbID !== action.payload.imdbID)
          } ;
        case actions.REJECT_MOVIE:
          return{
            ...state,
            watchlist:state.watchlist.filter((movie)=>movie.imdbID !== action.payload.imdbID),
            rejected:[action.payload,...state.rejected],
            loved:state.loved.filter((movie)=>movie.imdbID !== action.payload.imdbID)
          };
        case actions.REMOVE_FROM_REJECTED_MOVIES:
          return{
            ...state,
            rejected:state.rejected.filter((movie)=>movie.imdbID !== action.payload.imdbID),
          };
        default :
          return state;  
  }
}
