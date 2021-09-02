import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { BACKDROP_URL, API_KEY, LANGUAGE } from '../constant/app-constant';
import axios from 'axios';

function MovieDetail(props) {
    const history = useHistory();
    const location = useLocation();
    const [movie, setMovie] = useState();

    let [isLoading, setLoading] = useState(false);


    useEffect(() => {
    }, [location]);

    useEffect(() => {
        getMovieDetail(API_KEY, LANGUAGE, location.state.param.id);
    }, []);

    /**
    * The method that brings trending movies
    * @param API_KEY the movie db api key
    * @param LANGUAGE locale language
    */

    async function getMovieDetail(API_KEY, LANGUAGE, movieId) {
        await axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + API_KEY + "&language=" + LANGUAGE).then(function (response) {
            setMovie(response.data);
            setLoading(true);
            console.info(response.data);
        })
    }
    console.info(movie);

    return isLoading ? (
        <div className="App-content">
            <Container>
                <Row>
                    <Row>
                        <div className="mb-2" align="left" style={{ margin: '16px' }}>
                            <Button onClick={() => {
                                history.push("/")
                            }} variant="secondary" size="lg">
                                Go back
                            </Button>{' '}
                        </div>
                    </Row>
                    <Col xs lg="5">
                        <img alt="movie" align="left" height="400" width="500px" src={BACKDROP_URL + movie.backdrop_path} />
                    </Col>
                    <Col >
                        <div align="left" style={{
                            margin: '0', fontSize: "14px"
                        }}>

                            <h1 style={{ align: "left" }}>{movie.title}</h1>
                            <span><b> Vizyona giriş Tarihi: </b> {movie.release_date}</span> <br></br>
                            <span><b> Süre: </b> {movie.runtime}</span> <br></br>
                            <span><b> Tür: </b> {movie.genres.map((element, index) => (element.name + " "))} </span> <br></br>
                            <span><b> Süre: </b> {movie.runtime}</span> <br></br>
                            <span><b> Açıklama: </b> {movie.overview}</span> <br></br>
                            <span><b> Diller: </b> {movie.spoken_languages.map((element, index) => (element.name + " "))} </span> <br></br>
                            <span><b> Puan: </b> {movie.vote_average}</span> <br></br>
                            <span><b> Puan Sayısı: </b> {movie.vote_count}</span> <br></br>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    ) : <div className="App-content">
        <div> Loading..</div>
    </div>;
}


export default MovieDetail;

/*
<Row>
                    <Row>

                        <div className="mb-2" align="left" style={{ margin: '16px' }}>
                            <Button variant="secondary" size="lg">
                                Go back
                            </Button>{' '}

                        </div>
                    </Row>
                    <Col xs lg="5">
                        <img alt="movie" align="left" height="600px" width="500px" src={BACKDROP_URL} />

                    </Col>
                    <Col md="auto">
                        <div align="left" style={{
                            margin: '0', fontSize: "14px"
                        }}>

                            <h1 style={{ align: "left" }}>{movie.title}</h1>

                            <span><b> Yıl </b> 2019</span> <br></br>
                            <span><b> Vizyona Giriş Tarihi </b> {movie.release_date}</span> <br></br>
                            <span><b> Populerite </b> {movie.popularity}</span> <br></br>
                            <span><b> IMBD Oy Ortalaması </b> {movie.vote_average}</span> <br></br>
                            <span><b> Orjinal Başlık </b> {movie}</span> <br></br>
                            <span><b> Açıklama </b> 2019</span> <br></br>
                            <span><b> Dil </b> 2019</span> <br></br>
                            <span><b> Ülke </b> 2019</span> <br></br>
                            <span><b> Ödül </b> 2019</span> <br></br>


                        </div>

                    </Col>
                </Row>
*/