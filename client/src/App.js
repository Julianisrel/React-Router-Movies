import React, { useState } from "react";
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
//import Header from '../src/Movies/Head';

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  // const addToSavedList = movie => {
  //   setSavedList([...savedList, movie]);
  // };
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  }

  //   if (movie ) {
  //     return "You already saved that movie";
  //   } else {
  //     setSavedList([...savedList, movie]);
  //   }
  // }

  return (
    <div className="container">
      {/* <Header /> */}
      <SavedList list={savedList} />
      <Route exact path="/"><MovieList /></Route>
      {/* <Route path="/movie/:id"><Movie add={addToSavedList} /></Route> */}
      <Route path='/movie/:id'><Movie/></Route>
    </div>
  );
};

export default App;