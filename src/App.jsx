import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import './App.css';
import Encoded from './components/Encoded';
import PlaybackControl from './components/PlaybackControl';
import HeaderTitle from './components/HeaderTitle';
import TextInput from './components/TextInput';

function App() {
  const [text, setText] = useState('');

  return (
    <Container fluid>
      <HeaderTitle />
      <Container>
        <TextInput onTextInput={setText} text={text} />
        <Row>
          <Col>
            <p className="fw-bold mb-1">Encoded result:</p>
            <Encoded text={text} />
          </Col>
        </Row>
        <PlaybackControl text={text} />
      </Container>
    </Container>
  );
}

export default App;
