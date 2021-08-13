import React from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ImFileText } from 'react-icons/im';

function TextInput({ onTextInput, text }) {
  function handleInput(e) {
    onTextInput(e.target.value.toUpperCase());
  }

  function loadExample(e) {
    e.preventDefault();

    onTextInput('Hello world'.toUpperCase());
  }

  return (
    <Row className="py-3">
      <Col>
        <Form>
          <Form.Label className="fw-bold">Enter your text here:</Form.Label>
          <Form.Group className="mb-2">
            <Form.Control as="textarea" rows="4" onChange={handleInput} value={text} className="font-monospace" />
          </Form.Group>
          <Button variant="light" onClick={loadExample}>
            <ImFileText />
            {' '}
            Load example
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

TextInput.propTypes = {
  onTextInput: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextInput;
