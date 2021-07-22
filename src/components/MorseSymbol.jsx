import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

function MorseSymbol({ symbol }) {
  return <Badge className="d-inline-block me-2 font-monospace" bg="secondary">{symbol}</Badge>;
}

MorseSymbol.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default MorseSymbol;
