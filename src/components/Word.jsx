import React from 'react';
import PropTypes from 'prop-types';
import MorseSymbol from './MorseSymbol';
import encodeInMorse from '../morse';

function Word({ word }) {
  const encoded = encodeInMorse(word);

  return (
    <tr>
      <td>{word}</td>
      <td>
        <p className="mb-0 lead">
          {
          encoded.split(' ').map((symbol, symbolIndex) => <MorseSymbol symbol={symbol} key={symbol + symbolIndex.toString()} />)
        }
        </p>
      </td>
    </tr>
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Word;
