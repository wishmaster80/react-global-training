export const movies = (state = {
  movies: [],
  counter: 0,
  searchText: '',
  searchBy: 'title',
  sortBy: 'release_date'
}, action) => {
  //  console.log(state)
  //  console.log(action)
  switch (action.type) {    
    case 'FETCH_MOVIES_SUCCESS':
      return {
        movies: action.movies.data,
        counter: action.movies.total,
        searchText: state.searchText,
        searchBy: state.searchBy,
        sortBy: state.sortBy
      }
    case 'SEARCH_TEXT_CHANGED':   
      return {
        movies: state.movies,
        counter: state.counter,
        searchText: action.searchText,
        searchBy: state.searchBy,
        sortBy: state.sortBy
      }
      case 'SEARCH_BY_TEXT_CHANGED':
      return {
        movies: state.movies,
        counter: state.counter,
        searchText: state.searchText,
        searchBy: action.searchBy,
        sortBy: state.sortBy
      }
      case 'SORT_BY_TEXT_CHANGED':
      return {
        movies: state.movies,
        counter: state.counter,
        searchText: state.searchText,
        searchBy: state.searchBy,
        sortBy: action.sortBy
      }            
    default:
      return state
  }
}

export default movies;