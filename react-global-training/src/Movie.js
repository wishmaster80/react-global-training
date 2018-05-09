import React, { Component } from 'react';
import './Movie.css';
import MoviesList from './MoviesList'
import { Link } from 'react-router-dom';
import getMovie from './getMovie'
import getMovies from './getMovies'
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            movies: []
        }
    }

    async componentDidMount() {
        const movie = await getMovie(this.props.match.params.id);
        this.setState({ movie: movie });        
        const movies = await getMovies(movie.genres);
        this.setState({ movies: movies.data });
    }
    render() {
        return (
            <React.Fragment>
                { <Link to="/">Search</Link> }
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