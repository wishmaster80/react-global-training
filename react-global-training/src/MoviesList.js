import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  if (movies.length === 0) { return (<NoFilmsFound />); }

  return (
        <div className="row">
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
  );
};

export default MoviesList;
const NoFilmsFound = () => (
        <h1>No films Found</h1>
);

const Movie = ({ movie }) => (
        <Link to={`/movie/${movie.id}`}>
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
        </Link>
);
