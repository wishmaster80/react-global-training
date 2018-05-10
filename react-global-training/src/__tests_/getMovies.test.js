import getMovies from './../getMovies';

jest.mock('./../fetchData');

it('getMovies', () => {
    getMovies('', '', '');
});