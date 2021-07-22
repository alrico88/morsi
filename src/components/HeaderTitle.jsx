import React from 'react';
import { Col, Row } from 'react-bootstrap';
import encodeInMorse from '../morse';

const title = 'morsi';
const encodedTitle = encodeInMorse(title);

function HeaderTitle() {
  const style = {
    opacity: 0.6,
  };

  return (
    <Row className="text-center py-2 blueBG text-white">
      <Col>
        <h1 className="mb-0">{title}</h1>
        <h5 style={style}>
          (
          {encodedTitle}
          )
        </h5>
      </Col>
    </Row>
  );
}

export default HeaderTitle;
