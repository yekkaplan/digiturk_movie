import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HomeScreen from "./components/home-screen";
import MovieDetail from "./components/movie-detail";
import { Container } from "react-bootstrap";
import { LANGUAGE, API_KEY } from "./constant/app-constant";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=" +
          API_KEY +
          "&language=" +
          LANGUAGE +
          "&page=1"
      )
      .then(function (response) {
        setMovies(response.data);
        setLoading(true);
      });
  }, []);

  /**
   *
   * @param {String} API_KEY - its movie db api key
   * @param {String} LANGUAGE - its locale language code
   */
  return isLoading ? (
    <div className="App" >
      <Router>
        <Container>
          <Header />
          <Route
            path="/"
            exact
            render={() => {
              return <HomeScreen movies={movies} />;
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
  ) : (
    <div className="App-content">
      <div> Loading..</div>
    </div>
  );
}

export default App;
