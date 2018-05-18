
import moviesFetched from '../../actions/moviesFetched'

describe('>>>A C T I O N --- Test moviesFetched',()=>{
    it('+++ actionCreator addInputs', () => {
        const add = moviesFetched({})
        expect(add).toEqual({type:"FETCH_MOVIES_SUCCESS",movies:{}})
    });

});