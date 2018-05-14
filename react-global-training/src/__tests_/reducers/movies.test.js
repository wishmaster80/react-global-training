import movies from '../../reducers/movies'



describe('>>>R E D U C E R --- Test movies', () => {
    it('+++ reducer for FETCH_MOVIES_SUCCESS', () => {
        let state = {
            movies:
                {
                    data: {},
                    total: 10
                }
        };
        state = movies(state, {
            type: "FETCH_MOVIES_SUCCESS", 
                movies:
                    {
                        data: {},
                        total: 10
                    }
            
        })
        expect(state).toEqual({
            movies: {},
            counter: 10
        })
    });
    it('+++ reducer for default', () => {
        let state = { output: 100 }
        state = movies(state, { type: "", output: 100 })
        expect(state).toEqual({ output: 100 })
    });
});