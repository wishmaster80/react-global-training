
import moviesFetched from '../../actions/index'

describe('>>>A C T I O N --- Test moviesFetched',()=>{
    it('+++ actionCreator addInputs', () => {
        console.log(moviesFetched);
        const add = moviesFetched({})
        expect(add).toEqual({type:"FETCH_MOVIES_SUCCESS",movies:{}})
    });

});