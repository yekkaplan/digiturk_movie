import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import Detail from './components/detail';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';

function App() {

  const [movies, setMovies] = useState([{
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Director": "James Camaron",
    "Explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Type": "Movie & Action",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "Explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "imdbID": "tt0080684",
    "Director": "James Camaron",
    "Type": "Movie & Action",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "Movie & Action",
    "Director": "James Camaron",
    "Explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }, {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "Movie & Action",
    "Director": "James Camaron",
    "Explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }, {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "Movie & Action",
    "Director": "James Camaron",
    "Explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },]);


  return (
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
              return <Detail />
            }
          } />



          <Footer />

        </Container>

      </Router>

    </div>
  );
}

export default App;
