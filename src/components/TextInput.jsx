import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function TextInput({ onTextInput, text }) {
  function handleInput(e) {
    onTextInput(e.target.value);
  }

  function loadExample(e) {
    e.preventDefault();

    onTextInput('Hello world');
  }

  return (
    <Row className="py-3">
      <Col>
        <Form>
          <Form.Label className="fw-bold">Enter your text here:</Form.Label>
          <Form.Group>
            <Form.Control as="textarea" rows="4" onChange={handleInput} value={text} />
          </Form.Group>
          <a href="#" className="text-decoration-none" onClick={loadExample}>Load example</a>
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
