import React, { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Word from './Word';
import EmptyState from './EmptyState';

function Encoded({ text }) {
  const split = useMemo(() => text.trim().split(' ').filter((d) => d !== ''), [text]);

  const content = split.map((word, index) => <Word key={word + index.toString()} word={word} />);

  return (
    <Table bordered striped className="align-middle bg-white">
      <thead className="table-light">
        <tr>
          <th>Word</th>
          <th>Morse</th>
        </tr>
      </thead>
      <tbody>
        {split.length > 0 ? content : <EmptyState />}
      </tbody>
    </Table>
  );
}

Encoded.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Encoded;
