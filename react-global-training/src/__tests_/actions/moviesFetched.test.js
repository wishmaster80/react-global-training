import moviesFetched from '../../actions/moviesFetched'
import searchByChangeChanged from '../../actions/searchByChangeChanged'
import searchTextChanged from '../../actions/searchTextChanged'
import sortByChangeChanged from '../../actions/sortByChangeChanged'


describe('>>>A C T I O N --- Test moviesFetched',()=>{
    it('+++ actionCreator addInputs', () => {
        const add = moviesFetched({test:'test'})
        expect(add).toEqual({type:"FETCH_MOVIES_SUCCESS",movies:{test:'test'}})
    });

});


describe('>>>A C T I O N --- Test searchByChangeChanged',()=>{
    it('+++ actionCreator addInputs', () => {
        const add = searchByChangeChanged({test:'test'})
        expect(add).toEqual({type:"SEARCH_BY_TEXT_CHANGED",searchBy:{test:'test'}})
    });

});


describe('>>>A C T I O N --- Test searchTextChanged',()=>{
    it('+++ actionCreator addInputs', () => {
        const add = searchTextChanged({test:'test'})
        expect(add).toEqual({type:"SEARCH_TEXT_CHANGED",searchText:{test:'test'}})
    });

});


describe('>>>A C T I O N --- Test sortByChangeChanged',()=>{
    it('+++ actionCreator addInputs', () => {
        const add = sortByChangeChanged({test:'test'})
        expect(add).toEqual({type:"SORT_BY_TEXT_CHANGED",sortBy:{test:'test'}})
    });  

});