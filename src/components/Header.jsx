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
      <Navbar className="bar" fixed="top" bg="light" expand="lg">
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
                  <i className=" home icon big"></i>
                </Nav.Link>
                <Nav.Link href="#link">
                  <i class="paper plane outline icon big"></i>
                </Nav.Link>
                <Nav.Link href="#home">
                  <i className=" compass outline icon big"></i>
                </Nav.Link>
                <Nav.Link href="#home">
                  <i className=" heart outline icon big"></i>
                </Nav.Link>
                <Nav.Link className="headerLink" href="#link">
                  <div className="HeaderImage">
                    <img
                      className="Storyimg"
                      src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
                    />
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
