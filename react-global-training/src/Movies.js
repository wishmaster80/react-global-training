import React, { Component } from 'react';
import './Movies.css';
import MoviesList from './MoviesList'
import getMovies from './getMovies'
import moviesFetched from './actions/moviesFetched'
import searchTextChanged from './actions/searchTextChanged'
import updateList from './actions/updateList'
import { connect } from "react-redux";
import searchByChangeChanged from './actions/searchByChangeChanged'
import sortByChangeChanged from './actions/sortByChangeChanged'

class Movies extends Component {
    async componentDidMount() {
        if (this.props.match.params.searchText !== undefined) {
            this.props.movies.searchText = this.props.match.params.searchText;
        }
        if (this.props.match.params.searchBy !== undefined) {
            this.props.movies.searchBy = this.props.match.params.searchBy;
        }
        if (this.props.match.params.searchBy !== undefined) {
            this.props.movies.sortBy = this.props.match.params.sortBy;
        }
        const movies = await getMovies(this.props.match.params.searchText, this.props.match.params.searchBy, this.props.match.params.sortBy);
        this.props.moviesFetched(movies);
    }
    async componentWillReceiveProps(nextProps) {
        if (this.props.match.params.searchText !== nextProps.match.params.searchText
            || this.props.match.params.searchBy !== nextProps.match.params.searchBy
            || this.props.match.params.sortBy !== nextProps.match.params.sortBy) {
            const movies = await getMovies(nextProps.match.params.searchText, nextProps.match.params.searchBy, nextProps.match.params.sortBy);
            this.props.moviesFetched(movies);
        }
    }
    // static async  getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('getDerivedStateFromProps')
    //     console.log(nextProps.movies.updateList)
    //     if (nextProps.movies.updateList) {
    //         const movies = await getMovies(nextProps.movies.searchText, nextProps.movies.searchBy, nextProps.movies.sortBy);
    //         nextProps.moviesFetched(movies);
    //     }
    //     var x = {
    //         ...nextProps,
    //         movies: {...nextProps.movies,
    //             updateList: false
    //         }
    //     }
    //     console.log(x)
    //     return {
    //         ...nextProps,
    //         movies: {...nextProps.movies,
    //             updateList: false
    //         }
    //     };
    // }
    async search() {
        this.props.updateList();
        this.props.history.push(`/search/${this.props.movies.searchText}/${this.props.movies.searchBy}/${this.props.movies.sortBy}`);
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
                    searchTextValue={this.props.movies.searchText}
                    searchText={this.searchTextChange.bind(this)}
                    search={this.search.bind(this)}
                    counter={this.props.movies.counter}
                    searchByValue={this.props.movies.searchBy}
                    searchBy={this.searchByChange.bind(this)}
                    sortBy={this.sortByChange.bind(this)}
                    sortByValue={this.props.movies.sortBy} />
                <MoviesList movies={this.props.movies.movies} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        counter: state.counter
    }
};
const mapDispatchToProps = { moviesFetched, searchTextChanged, searchByChangeChanged, sortByChangeChanged, updateList };

const MoviesContainer = connect(mapStateToProps, mapDispatchToProps)(Movies);
export default MoviesContainer;


const SearchPanel = ({ searchTextValue, searchText, search, counter, searchByValue, searchBy, sortByValue, sortBy }) => {
    return (
        <React.Fragment>
            <div>
                FIND YOUR MOVIE
        </div>
            <input onChange={searchText} value={searchTextValue} />
            <div>
                Search By
                <select onChange={searchBy} value={searchByValue} >
                    <option value="title">Title</option>
                    <option value="genre">Genre</option>
                </select>
            </div>
            <div>{counter} movies found</div>
            <div>
                Sort By
                <select onChange={sortBy} value={sortByValue}>
                    <option value="release_date">release date</option>
                    <option value="vote_average">rating</option>
                </select>
            </div>
            <button onClick={search}>SEARCH</button>
        </React.Fragment>
    );
}


