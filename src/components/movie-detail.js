import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import { BACKDROP_URL, LOADING_MESSAGE } from "../constant/app-constant";
import { connect } from "react-redux";
import { getMovieDetail } from "../actions/actions";

/**
 * @param {Object} props.movie - its movie detail
 * @param {Object} props.isLoading -  for loading screen
 * @returns movie detail page
 */
const MovieDetail = (props) => {
  const history = useHistory();
  const location = useLocation();

  let paramId = location.state.param.id;
  useEffect(() => {
    console.info(paramId);
    getMovieDetail(paramId);
  }, []);

  /**
   * The method that brings trending movies
   * @param API_KEY the movie db api key
   * @param LANGUAGE locale language
   */

  return !props.movieDetail ? (
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
              src={BACKDROP_URL + props.movieDetail.backdrop_path}
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
              <h1 style={{ align: "left" }}>{props.movieDetail.title}</h1>
              <span>
                <b> Vizyona giriş Tarihi: </b> {props.movieDetail.release_date}
              </span>
              <br />
              <span>
                <b> Süre: </b> {props.movieDetail.runtime}
              </span>
              <br />
              <span>
                <b> Tür: </b>
                {props.movieDetail.genres.map(
                  (element, index) => element.name + " "
                )}
              </span>
              <br />
              <span>
                <b> Süre: </b> {props.movieDetail.runtime}
              </span>
              <br />
              <span>
                <b> Açıklama: </b> {props.movieDetail.overview}
              </span>
              <br />
              <span>
                <b> Diller: </b>{" "}
                {props.movieDetail.spoken_languages.map(
                  (element, index) => element.name + " "
                )}
              </span>
              <br />
              <span>
                <b> Puan: </b> {props.movieDetail.vote_average}
              </span>
              <br />
              <span>
                <b> Puan Sayısı: </b> {props.movieDetail.vote_count}
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

export default connect(mapStateToProps, { getMovieDetail })(MovieDetail);
