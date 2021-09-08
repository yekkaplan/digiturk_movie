import React from "react";
import { Container, Row } from "react-bootstrap";

/**
 *
 * @returns returns the footer view
 */
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
