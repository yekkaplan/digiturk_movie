import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import React, { useState, useEffect } from 'react';


function App() {

  const [movies, setMovies] = useState([{
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }, {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }, {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },]);


  return (
    <div className="App">
      <Container>

        <Header />

        <Body movies={movies} />


        <Footer />

      </Container>
    </div>
  );
}

export default App;
