import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col sm={6}>
            <h5>About Movie Watchlist</h5>
            <p>Your go-to app for keeping track of your favorite movies and TV shows.</p>
          </Col>
          <Col sm={6}>
            <h5>Contact Us</h5>
            <address>
              <p>Email: contact@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">&copy; {new Date().getFullYear()} Movie Watchlist</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
