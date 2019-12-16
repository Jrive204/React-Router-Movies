import React, { useState } from "react";

import SavedList from "./Movies/SavedList";
import { Router, Route, Switch } from "react-router-dom";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path='/'>
          <MovieList></MovieList>
        </Route>
        <Route path='/movies/:movieid'>
          <Movie></Movie>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
