import React, { Component } from 'react';
import './App.css';
class Movies extends Component {
    state = {
        searchText: '',
        movies: []
    }
    search() {      
        var movieslist = [1,2,4]; //todo
        this.setState({
            movies: movieslist
        })
    }

    searchTextChange(event) {
        this.setState({
            searchText: event.target.value
        });
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
    return (
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)
    )
}


const Movie = ({ movie }) => {
    return (
        <div>Movie detail TODO</div>
    )
}