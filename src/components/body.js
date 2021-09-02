import React from "react";
import MovieList from "./movie-list";
import PropTypes from "prop-types";
function Body(props) {
  return (
    <div className="App-content">
      <MovieList movies={props.movies} />
    </div>
  );
}

export default Body;

Body.propTypes = {
  movies: PropTypes.array,
};
