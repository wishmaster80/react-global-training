export const movies = (state = {
  movies: [],
  counter: 0,
  searchText: ''
}, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return {
        movies: action.movies.data,
        counter: action.movies.total,
        searchText: state.searchText
      }
    case 'SEARCH_TEXT_CHANGED':
      return {
        movies: state.movies,
        counter: state.counter,
        searchText: action.searchText
      }
    default:
      return state
  }
}

export default movies;