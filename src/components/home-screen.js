import React from "react";
import MovieList from "./movie-list";
import PropTypes from "prop-types";


/**
 * 
 * @param {array}  props containing movies 
 * @returns the HomeScreen view
 */
function HomeScreen(props) {
  const { movies }= props;
  return (
    <div className="App-content">
      <MovieList movies={movies} />
    </div>
  );
}

export default HomeScreen;

HomeScreen.propTypes = {
  movies: PropTypes.array,
};
