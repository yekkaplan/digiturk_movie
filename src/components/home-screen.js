import React from "react";
import MovieList from "./movie-list";

/**
 *
 * @param {array}  props containing movies
 * @returns the HomeScreen view
 */
function HomeScreen(props) {
  return (
    <div className="App-content">
      <MovieList movies={props.movies} />
    </div>
  );
}

export default HomeScreen;
