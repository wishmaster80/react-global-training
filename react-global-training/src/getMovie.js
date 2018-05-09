async function getMovie(id){
    var url = `https://react-cdp-api.herokuapp.com/movies/${id}`
    console.log(url);
    const response = await fetch(url);
    return await response.json()
}
export default getMovie;