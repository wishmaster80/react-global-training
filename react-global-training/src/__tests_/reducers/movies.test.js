import movies from '../../reducers/movies'



describe('>>>R E D U C E R --- Test movies', () => {
    it('+++ reducer for FETCH_MOVIES_SUCCESS', () => {
        let state = {
            movies: [],
            counter: 0,
            searchText: '',
            searchBy: 'title',
            sortBy: 'release_date'
        };
        state = movies(state, {
            type: "FETCH_MOVIES_SUCCESS", 
                movies:
                    {
                        data: {},
                        total: 20
                    }
            
        })
        expect(state).toEqual({
            movies: {},
            counter: 20,
            searchText: '', 
            sortBy: 'release_date',
            searchBy: 'title'
        })
    });
    it('+++ reducer for default', () => {
        let state = { output: 100 }
        state = movies(state, { type: "", output: 100 })
        expect(state).toEqual({ output: 100 })
    });

    it('+++ reducer for SEARCH_TEXT_CHANGED', () => {
        let state = {
            movies: [],
            counter: 0,
            searchText: '',
            searchBy: 'title',
            sortBy: 'release_date'
        };
        state = movies(state, {
            type: "SEARCH_TEXT_CHANGED", 
            searchText: 'text'
        })
        expect(state).toEqual({
            movies: [],
            counter: 0,
            searchText: 'text', 
            searchBy: 'title',
            sortBy: "release_date",
        })
    });

    it('+++ reducer for SEARCH_BY_TEXT_CHANGED', () => {
        let state = {
            movies: [],
            counter: 0,
            searchText: '',
            searchBy: 'title',
            sortBy: 'release_date'
        };
        state = movies(state, {
            type: "SEARCH_BY_TEXT_CHANGED", 
            searchBy: 'searchBy'
            
        })
        expect(state).toEqual({
            movies: [],
            counter: 0,
            searchText: '', 
            searchBy: 'searchBy',
            sortBy: "release_date",
        })
    });
    
    
    it('+++ reducer for SORT_BY_TEXT_CHANGED', () => {
        let state = {
            movies: [],
            counter: 0,
            searchText: '',
            searchBy: 'title',
            sortBy: 'release_date'
        };
        state = movies(state, {
            type: "SORT_BY_TEXT_CHANGED", 
            sortBy: 'sortBy'
            
        })
        expect(state).toEqual({
            movies: [],
            counter: 0,
            searchText: '', 
            searchBy: 'title',
            sortBy: "sortBy",
        })
    });    


});