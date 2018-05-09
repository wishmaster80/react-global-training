import React, { Component } from 'react';
import './Movie.css';
import MoviesList from './MoviesList'
import { Link } from 'react-router-dom';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            movies: []
        }
    }

    async componentDidMount() {
        const movie = await this.getMovie();
        this.setState({ movie: movie });
        console.log(movie);
        const movies = await this.getMovies(movie.genres);
        this.setState({ movies: movies.data });
    }

    async getMovie() {
        var url = 'https://react-cdp-api.herokuapp.com/movies/' + this.props.match.params.id
        const response = await fetch(url)
        return await response.json()
    }

    async getMovies(genres) {
        var url = `http://react-cdp-api.herokuapp.com/movies`;//todo add filter
        const response = await fetch(url);
        return await response.json()
    }
    render() {
        return (
            <React.Fragment>
                <Link to="/">Search</Link>
                <div>
                    <MovieDetails movie={this.state.movie} />
                </div>
                <div>
                    Films by {this.state.movie.genres} genres
                    <MoviesList movies={this.state.movies} />
                </div>
            </React.Fragment>
        )
    }

}

export default Movie;



const MovieDetails = ({ movie }) => {
    return (
        <div>
            <img
                src={movie.poster_path} alt={movie.title}
            />
            <div>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}