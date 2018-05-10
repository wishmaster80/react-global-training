import data from './data'
async function getMovies(searchText, searchBy, sortBy) {       
    var obj = JSON.parse(data);    
    return obj;
}
export default getMovies;