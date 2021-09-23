import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HomeScreen from "./components/home-screen";
import MovieDetail from "./components/movie-detail";
import { Container } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { getMovies } from "./actions/actions";
import { LOADING_MESSAGE } from "./constant/app-constant";

/**
 * @param {String} API_KEY - its movie db api key
 * @param {String} LANGUAGE - its locale language code
 */
const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return props.isLoading ? (
    <div>{LOADING_MESSAGE}</div>
  ) : (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Route
            path="/"
            exact
            render={() => {
              return <HomeScreen movies={props.movies} />;
            }}
          />
          <Route
            path="/detail"
            exact
            strict
            render={() => {
              return <MovieDetail />;
            }}
          />
          <Footer />
        </Container>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { getMovies })(App);
