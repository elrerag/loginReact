import React from 'react';
import Header from './Header'
import Nav from './Nav'
import LoginSection from './LoginSection'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row><Col><Header /></Col></Row>
        <Row><Col><Nav /></Col></Row>
        <Row>
          <Col></Col>
          <Col><LoginSection /></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
