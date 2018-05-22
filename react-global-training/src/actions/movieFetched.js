const movieFetched = (movie) => ({
  type: 'FETCH_MOVIE_SUCCESS',
  movie
});

export default movieFetched;