import fetchData from './fetchData';

async function getMovie(id) {
  const url = `https://react-cdp-api.herokuapp.com/movies/${id}`;
  return await fetchData(url);
}
export default getMovie;
