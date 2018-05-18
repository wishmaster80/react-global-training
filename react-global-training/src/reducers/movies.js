export const movies = (state = {
  movies: [],
  counter: 0
}, action) => {    
  switch (action.type) {    
    case 'FETCH_MOVIES_SUCCESS':
      return {
            movies: action.movies.data,
            counter: action.movies.total
        }
    default:    
      return state
  }
}

export default movies;