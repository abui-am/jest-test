import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'reactstrap';

function CustomContainer({ children }) {
  return (
    <Container
      style={{
        maxWidth: 800,
      }}
    >
      {children}
    </Container>
  );
}

CustomContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomContainer;
