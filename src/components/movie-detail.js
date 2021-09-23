import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import { BACKDROP_URL, LOADING_MESSAGE } from "../constant/app-constant";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesDetail } from "../actions/actions";

/**
 * @param {Object} movie - its movie detail
 * @returns movie detail page
 */
const MovieDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const movie = useSelector((state) => state.movieDetail);

  useEffect(() => {
    dispatch(getMoviesDetail(location.state.param.id));
  }, []);

  return !movie ? (
    <div>{LOADING_MESSAGE}</div>
  ) : (
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
  );
};

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { getMoviesDetail })(MovieDetail);
