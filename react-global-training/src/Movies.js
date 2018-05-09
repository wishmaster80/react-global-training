import React, { Component } from 'react';
import './Movies.css';
import MoviesList from './MoviesList'
import getMovies from './getMovies'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            movies: [],
            searchBy: 'title',
            counter: 0,
            sortBy: 'release_date'
        }
    }

    async search() {
        const movies = await getMovies(this.state.searchText, this.state.searchBy, this.state.sortBy);
        this.setState({
            movies: movies.data,
            counter: movies.total
        })
    }

    searchTextChange(event) {
        this.setState({
            searchText: event.target.value,
        });
    }

    searchByChange(event) {
        this.setState({
            searchBy: event.target.value,
        });
    }

    sortByChange(event) {
        this.setState({
            sortBy: event.target.value,
        });
    }


    render() {
        console.log("render-----------------------")
        return (
            <React.Fragment>
                <SearchPanel
                    searchText={this.searchTextChange.bind(this)}
                    search={this.search.bind(this)}
                    counter={this.state.counter}
                    searchBy={this.searchByChange.bind(this)}
                    sortBy={this.sortByChange.bind(this)} />
                <MoviesList movies={this.state.movies} />
            </React.Fragment>
        )
    }
}
export default Movies;


const SearchPanel = ({ searchText, search, counter, searchBy, sortBy }) => {
    return (
        <React.Fragment>
            <div>
                FIND YOUR MOVIE
        </div>
            <input onChange={searchText} />
            <div>
                Search By
                <select onChange={searchBy}>
                    <option value="title">Title</option>
                    <option value="genre">Genre</option>
                </select>
            </div>
            <div>{counter} movies found</div>
            <div>
                Sort By
                <select onChange={sortBy}>
                    <option value="release_date">release date</option>
                    <option value="vote_average">rating</option>
                </select>
            </div>
            <button onClick={search}>SEARCH</button>
        </React.Fragment>
    );
}


