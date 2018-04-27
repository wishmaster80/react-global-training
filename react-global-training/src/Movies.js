import React, { Component } from 'react';
import './Movies.css';
class Movies extends Component {
    state = {
        searchText: '',
        movies: [],
        searchBy: 'title',
        counter: 0,
        sortBy: 'release_date'
    }
    async search() {
        const movies = await this.GetMovies();
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

    async GetMovies() {
        var url = `http://react-cdp-api.herokuapp.com/movies?search=${this.state.searchText}&searchBy=${this.state.searchBy}&sortBy=${this.state.sortBy}`;
        console.log(url);
        const response = await fetch(url);
        return await response.json()
    }

    render() {
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


const MoviesList = ({ movies }) => {
    if (movies.length === 0)
        return (<NoFilmsFound />)

    return (
        <div className="row">
            {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
    )
}


const NoFilmsFound = () => {
    return (
        <h1>No films Found</h1>
    )
}

const Movie = ({ movie }) => {
    return (
        <div className="col" hight='300px' >
            <img
                src={movie.poster_path} alt={movie.title} width='300px'
            />
            <div>
                <p>{movie.title}</p>
                <p >{movie.release_date}</p>
                <p>{movie.genres.reduce((prev, curr) => [...prev, ', ', curr])}</p>
            </div>
        </div>
    )
}