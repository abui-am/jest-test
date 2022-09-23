import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import pokemon from '../assets/pokemon.png';

function Title({ title }) {
  return (
    <Container>
      <Row>
        <Col lg={12} className="mt-4">
          <img src={pokemon} alt="pokemon" width={300} />
          {title}
        </Col>
      </Row>
    </Container>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
