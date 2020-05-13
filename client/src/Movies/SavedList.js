import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';


const SavedList = props => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div className="saved-list">
      
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      ))
      }
      <div onClick={handleClick} className="home-button">Home</div>
    </div>
  );
};

export default SavedList;
