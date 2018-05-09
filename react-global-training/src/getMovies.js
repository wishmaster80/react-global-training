async function getMovies(searchText, searchBy, sortBy) {
    var url = `http://react-cdp-api.herokuapp.com/movies?search=${searchText}&searchBy=${searchBy}&sortBy=${sortBy}`;        
    const response = await fetch(url);
    return await response.json()

}

export default getMovies;