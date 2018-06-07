export const movies = (state = {
  movies: [],
  counter: 0,
  searchText: '',
  searchBy: 'title',
  sortBy: 'release_date'
}, action) => {
  // console.log('red state')  
  // console.log(state)
  // console.log('red action')  
  // console.log(action)
  switch (action.type) {    
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.movies.data,
        counter: action.movies.total
      }
    case 'SEARCH_TEXT_CHANGED':   
      return {
        ...state,
        searchText: action.searchText        
      }
      case 'SEARCH_BY_TEXT_CHANGED':
      return {
        ...state,
        searchBy: action.searchBy
      }
      case 'SORT_BY_TEXT_CHANGED':
      return {
        ...state,
        sortBy: action.sortBy
      }    
      case 'UPDATE_LIST':
      return {
        ...state,
        updateList : true
      }                  
    default:
      return state
  }
}

export default movies;