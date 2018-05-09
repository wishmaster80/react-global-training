import movieData from './movieData'
async function getMovie(id){
    var obj = JSON.parse(movieData);    
    return obj;
}
export default getMovie;