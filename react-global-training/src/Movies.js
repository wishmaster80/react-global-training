import React, { Component } from 'react';
import './App.css';
class Movies extends Component {
    state = {
        searchText: '',
        movies: []
    }
    async search() {      
        const movies = await this.GetMovies();        
        this.setState({ movies: movies.data })
    }

    searchTextChange(event) {
        this.setState({
            searchText: event.target.value
        });
    }

    async GetMovies() {
        const response = await fetch('http://react-cdp-api.herokuapp.com/movies')
        return await response.json()
      }

    render() {
        return (
            <React.Fragment>
                <SearchPanel
                    searchText={this.searchTextChange.bind(this)}
                    search={this.search.bind(this)} />
                <MoviesList movies={this.state.movies} />
            </React.Fragment>

        )
    }
}
export default Movies;


const SearchPanel = ({ searchText, search }) => {
    return (
        <React.Fragment>
            <div>
                FIND YOUR MOVIE
        </div>
            <input onChange={searchText} />
            <div>
                Search By
            <select>
                    <option value="title">Title</option>
                    <option value="genre">Genre</option>
                </select>
            </div>
            <button onClick={search}>SEARCH</button>

        </React.Fragment>
    );
}


const MoviesList = ({ movies }) => {
    console.log(movies)
    
    return (
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)
    )
}


const Movie = ({ movie }) => {
    return (
        <div>{movie.title}</div>
    )
}