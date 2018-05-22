export const movie = (state = {
  movie : {title:'default'},
  movies: []
  
}, action) => {  
  switch (action.type) {         
    case 'FETCH_MOVIE_SUCCESS':
      return {
            movie: action.movie,
            movies: state.movies
        }
    case 'FETCH_MOVIES_SUCCESS':    
        return {
              movie: state.movie,
              movies: action.movies.data
          }
    default:        
      return state;
  }
}

export default movie;