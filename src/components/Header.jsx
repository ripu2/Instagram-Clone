import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Story from './Story';
import '../styles/app.css';
class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Row>
            <Navbar.Brand href="#home">Instagram</Navbar.Brand>
          </Row>
          <Row>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Row>
          <Row className="last-Row">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">
                  <i className=" home icon large"></i>
                </Nav.Link>
                <Nav.Link href="#link">
                  <i className=" fighter jet icon large"></i>
                </Nav.Link>
                <Nav.Link href="#home">
                  <i className=" compass outline icon large"></i>
                </Nav.Link>
                <Nav.Link href="#link">
                  <div className="story">
                    <Story url="https://www.vexels.com/media/users//3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg" />
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
