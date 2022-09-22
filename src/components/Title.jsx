import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import pokemon from '../assets/pokemon.png';

function Title() {
  return (
    <Container>
      <Row>
        <Col lg={12} className="mt-4">
          <img src={pokemon} alt="pokemon" width={300} />
          <h1>Pokemon App</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Title;
