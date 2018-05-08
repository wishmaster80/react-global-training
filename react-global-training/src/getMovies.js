import data from './__mocks__/data'
async function getMovies(searchText, searchBy, sortBy) {
    var url = `http://react-cdp-api.herokuapp.com/movies?search=${searchText}&searchBy=${searchBy}&sortBy=${sortBy}`;    
    console.log(url);    
    const response = await fetch(url);
    return await response.json()

}

export default getMovies;