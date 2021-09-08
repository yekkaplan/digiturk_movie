import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import { BACKDROP_URL, API_KEY, LANGUAGE } from "../constant/app-constant";
import axios from "axios";

/**
 *
 * @returns movie detail page
 */
function MovieDetail() {
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState();
  const [isLoading, setLoading] = useState(false);
  const paramId = location.state.param.id;

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          paramId +
          "?api_key=" +
          API_KEY +
          "&language=" +
          LANGUAGE
      )
      .then(function (response) {
        setMovie(response.data);
        setLoading(true);
      });
  }, []);

  /**
   * The method that brings trending movies
   * @param API_KEY the movie db api key
   * @param LANGUAGE locale language
   */

  console.info(movie);

  return isLoading ? (
    <div className="App-content">
      <Container>
        <Row>
          <Row>
            <div className="mb-2" align="left" style={{ margin: "16px" }}>
              <Button
                onClick={() => {
                  history.push("/");
                }}
                variant="secondary"
                size="lg"
              >
                Go back
              </Button>
            </div>
          </Row>
          <Col xs lg="5">
            <img
              className="backdrop-img"
              alt="movie"
              src={BACKDROP_URL + movie.backdrop_path}
            />
          </Col>
          <Col>
            <div
              align="left"
              style={{
                margin: "0",
                fontSize: "14px",
              }}
            >
              <h1 style={{ align: "left" }}>{movie.title}</h1>
              <span>
                <b> Vizyona giriş Tarihi: </b> {movie.release_date}
              </span>
              <br />
              <span>
                <b> Süre: </b> {movie.runtime}
              </span>
              <br />
              <span>
                <b> Tür: </b>
                {movie.genres.map((element, index) => element.name + " ")}
              </span>
              <br />
              <span>
                <b> Süre: </b> {movie.runtime}
              </span>
              <br />
              <span>
                <b> Açıklama: </b> {movie.overview}
              </span>
              <br />
              <span>
                <b> Diller: </b>{" "}
                {movie.spoken_languages.map(
                  (element, index) => element.name + " "
                )}
              </span>
              <br />
              <span>
                <b> Puan: </b> {movie.vote_average}
              </span>
              <br />
              <span>
                <b> Puan Sayısı: </b> {movie.vote_count}
              </span>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <div className="App-content">
      <div> Loading..</div>
    </div>
  );
}

export default MovieDetail;
