import { useState } from 'react';
import './App.css';
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import data from './data.js';

function App() {
  let [menus] = useState();

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <h1>Touhenboku Eglinton</h1>
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#online-ordering' className='online-ordering'>
              ONLINE ORDERING
            </Nav.Link>
            <Nav.Link href='#menu'>MENU</Nav.Link>
            <Nav.Link href='#tomo'>TOMO</Nav.Link>
            <Nav.Link href='#contact'>CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'>
        <img
          id='logo'
          src={process.env.PUBLIC_URL + '/img/logo.png'}
          alt='Logo'
        />
      </div>
      <Container>
        <Row>
          <Col xs>
            <img
              id='karaage'
              src={process.env.PUBLIC_URL + '/img/karaagedon.jpg'}
              alt='Karaage Don'
            />
          </Col>
          <Col xs>Title</Col>
          <Col xs>Description</Col>
          <Col xs>Price</Col>
        </Row>
        <Row>
          <Col xs>
            <img
              id='karaage'
              src={process.env.PUBLIC_URL + '/img/karaagedon.jpg'}
              alt='Karaage Don'
            />
          </Col>
          <Col xs>Title</Col>
          <Col xs>Description</Col>
          <Col xs>Price</Col>
        </Row>
        <Row>
          <Col xs>
            <img
              id='karaage'
              src={process.env.PUBLIC_URL + '/img/karaagedon.jpg'}
              alt='Karaage Don'
            />
          </Col>
          <Col xs>Title</Col>
          <Col xs>Description</Col>
          <Col xs>Price</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
