import React from "react";
import { Container, Row } from "react-bootstrap";
import { DIGITURK_IMAGE } from "../constant/app-constant";

/**
 *
 * @returns the header view
 */
function Header() {
  return (
    <div>
      <Container>
        <Row>
          <div className="App-header">
            <img alt="digiturk" src={DIGITURK_IMAGE}></img>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
