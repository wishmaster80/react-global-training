import fetchData from './fetchData';

async function getMovies(searchText, searchBy, sortBy) {
  const url = `http://react-cdp-api.herokuapp.com/movies?search=${searchText}&searchBy=${searchBy}&sortBy=${sortBy}`;
  console.log(url);
  return await fetchData(url);
}

export default getMovies;
