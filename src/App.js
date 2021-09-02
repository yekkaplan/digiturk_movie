import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import MovieDetail from './components/movie-detail';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { LANGUAGE, API_KEY } from './constant/app-constant';
import axios from 'axios';



function App() {

  const [movies, setMovies] = useState([]);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getMovies(API_KEY, LANGUAGE);
  }, []);



  /**
  * The method that brings trending movies
  * @param API_KEY the movie db api key
  * @param LANGUAGE is  locale language  "tr-TR , en,Us"
  */
  async function getMovies(API_KEY, LANGUAGE) {
    await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=" + LANGUAGE + "&page=1").then(function (response) {
      setMovies(response.data);
      setLoading(true);
    })
  }


  return isLoading ? (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Route path="/" exact render={
            () => {
              return <Body movies={movies} />
            }
          } />
          <Route path="/detail" exact strict render={
            () => {
              return <MovieDetail />
            }
          } />
          <Footer />
        </Container>
      </Router>

    </div>
  ) : <div className="App-content">
    <div> Loading..</div>
  </div>;
}

export default App;
