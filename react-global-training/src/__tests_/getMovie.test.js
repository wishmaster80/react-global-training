import getMovie from './../getMovie';

jest.mock('./../fetchData');

it('getMovie', () => {
    getMovie(123);
});