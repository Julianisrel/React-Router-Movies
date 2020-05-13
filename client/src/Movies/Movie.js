import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const Movie = props => {
  console.log('hello from movie js')
  const [movie, setMovie] = useState();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        console.log(response.data)
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    // <div className="save-wrapper">
    //   <div className="movie-card">
    //     <h1 className="filmTitle">{title}</h1>
        
    //     <div className="movie-director">
    //       Director: <em>{director}</em>
    //     </div>
    //     <div className="movie-metascore">
    //       Metascore: <strong>{metascore}</strong>
    //     </div>
    //     <h2>Actors</h2>

    //     {stars.map(star => (
    //       <div key={star} className="movie-star">
    //         {star}
    //       </div>
    //     ))}
    //   </div>
    //   <div onClick={() => props.add(movie)} className="save-button">
    //     Save
    //   </div>
    // </div>

    //make use of the moviecard component
    <MovieCard
      title={title}
      director={director}
      metascore={metascore}
      stars={stars}/>
  );
};

export default Movie;