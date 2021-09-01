


import { Container, Row, Col, Button } from 'react-bootstrap';



function Detail(props) {
    return (
        <div className="App-content">
            <Container>
                <Row>
                    <Row>

                        <div className="mb-2" align="left" style={{ margin: '16px' }}>
                            <Button variant="secondary" size="lg">
                                Go back
                            </Button>{' '}

                        </div>
                    </Row>
                    <Col xs lg="3">
                        <img align="left" height="500px" src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" />

                    </Col>
                    <Col md="auto">
                        <div align="left" style={{
                            margin: '16px', fontSize: "14px"
                        }}>

                            <h1 style={{ align: "left" }}>Başlık</h1>

                            <span><b> Yıl </b> 2019</span> <br></br>
                            <span><b> Vizyona Giriş Tarihi </b> 2019</span> <br></br>
                            <span><b> Süre </b> 2019</span> <br></br>
                            <span><b> Yönetmen </b> 2019</span> <br></br>
                            <span><b> Aktörler </b> 2019</span> <br></br>
                            <span><b> Açıklama </b> 2019</span> <br></br>
                            <span><b> Dil </b> 2019</span> <br></br>
                            <span><b> Ülke </b> 2019</span> <br></br>
                            <span><b> Ödül </b> 2019</span> <br></br>


                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    );
}


export default Detail;