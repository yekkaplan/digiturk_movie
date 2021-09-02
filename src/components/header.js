
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Container>
                <Row>
                    <div className="App-header">
                        <img alt="digiturk" src="https://www.digiturk.com.tr/assets/img/logo-red.png">
                        </img>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Header;


