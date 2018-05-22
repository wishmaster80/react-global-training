
import movieFetched from '../../actions/movieFetched'

describe('>>>A C T I O N --- Test movieFetched',()=>{
    it('+++ actionCreator addInputs', () => {        
        const add = movieFetched({})
        expect(add).toEqual({type:"FETCH_MOVIE_SUCCESS",movie:{}})
    });

});