import movie from '../../reducers/movie';


describe('>>>R E D U C E R --- Test movie', () => {
  it('+++ reducer for FETCH_MOVIES_SUCCESS', () => {
    let state = {
      movie: {},
      movies: [],
    };
    state = movie(
      state,
      {
        movie: { id: 962, title: 'The Gold Rush', tagline: "The World's Greatest Laughing Picture!" },
        type: 'FETCH_MOVIE_SUCCESS',
      },
    );
    expect(state).toEqual({
      movie: { id: 962, title: 'The Gold Rush', tagline: "The World's Greatest Laughing Picture!" },
      movies: [],
    });
  });
  it('+++ reducer for default', () => {
    let state = { output: 100 };
    state = movie(state, { type: '', output: 100 });
    expect(state).toEqual({ output: 100 });
  });
});
