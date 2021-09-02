import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <div className="App-footer">© 2021 YEK All rights reserved.</div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
