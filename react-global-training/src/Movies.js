import React, { Component } from 'react';
import './Movies.css';
import MoviesList from './MoviesList'
import getMovies from './getMovies'
import moviesFetched from  './actions/moviesFetched'
import searchTextChanged from './actions/searchTextChanged'
import { connect } from "react-redux";
import searchByChangeChanged from './actions/searchByChangeChanged'
import sortByChangeChanged from './actions/sortByChangeChanged'

class Movies extends Component {
    async search() {          
        //console.log(this.props.movies)
        const movies = await getMovies(this.props.searchText, this.props.searchBy, this.props.sortBy);
        this.props.moviesFetched(movies);
    }

    searchTextChange(event) {        
        this.props.searchTextChanged(event.target.value);
    }

    searchByChange(event) {        
        this.props.searchByChangeChanged(event.target.value);        
    }

    sortByChange(event) {
        this.props.sortByChangeChanged(event.target.value);
    }


    render() {        
        return (
            <React.Fragment>
                <SearchPanel
                    searchText={this.searchTextChange.bind(this)}
                    search={this.search.bind(this)}
                    counter={this.props.movies.counter}
                    searchBy={this.searchByChange.bind(this)}
                    sortBy={this.sortByChange.bind(this)} />
                <MoviesList movies={this.props.movies.movies } />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        movies: state.movies,
        counter: state.counter,
        searchBy: state.searchBy
    }
};
const mapDispatchToProps = { moviesFetched, searchTextChanged, searchByChangeChanged, sortByChangeChanged };

const MoviesContainer = connect(mapStateToProps, mapDispatchToProps)(Movies);
export default MoviesContainer;


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


