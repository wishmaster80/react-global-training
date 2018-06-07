import movieData from './movieData';

async function getMovie(id) {
  const obj = JSON.parse(movieData);
  return obj;
}
export default getMovie;
