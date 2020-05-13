import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; //missing
import {Link} from 'react-router-dom';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    // <div className="movie-card">
    //   <h2>{title}</h2>
    //   <div className="movie-director">
    //     Director: <em>{director}</em>
    //   </div>
    //   <div className="movie-metascore">
    //     Metascore: <strong>{metascore}</strong>
    //   </div>
    //   <h3>Actors</h3>

    //   {stars.map(star => (
    //     <div key={star} className="movie-star">
    //       {star}
    //     </div>
    //   ))}
    // </div>
    
    //make use of the movie card component
    <Link to={`/movie/${id}`}> {/*move this out to here to get the params and make sure it matches the link in app.js*/}
      <MovieCard
        title={title}
        director={director}
        metascore={metascore}
        stars={stars}/>
    </Link>
  );
}

export default MovieList;
