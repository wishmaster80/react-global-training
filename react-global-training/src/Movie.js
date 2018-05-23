import React, { Component } from 'react';
import './Movie.css';
import MoviesList from './MoviesList'
import { Link } from 'react-router-dom';
import getMovie from './getMovie'
import getMovies from './getMovies'

import moviesFetched from  './actions/moviesFetched'
import movieFetched from  './actions/movieFetched'
import { connect } from "react-redux";

class Movie extends Component {
    async componentDidMount() {
        const movie = await getMovie(this.props.match.params.id);
        this.props.movieFetched(movie);
        const movies = await getMovies(movie.genres);
        this.props.moviesFetched(movies);
        
    }
    render() {
        return (
            <React.Fragment>
                { <Link to="/">Search</Link> }
                <div>
                    {this.props.data.movie.title}
                    <MovieDetails movie={this.props.data.movie} />
                </div>
                <div>
                    Films by {this.props.data.movie.genres} genres
                    <MoviesList movies={this.props.data.movies} />
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {    
    return {
        data: state.movie
    }
};
const mapDispatchToProps = { movieFetched, moviesFetched };


const MoviesContainer = connect(mapStateToProps, mapDispatchToProps)(Movie);
export default MoviesContainer;


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