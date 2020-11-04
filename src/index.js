import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import StoryBar from './components/storyBar';
import Content from './components/content';
import RightBar from './components/rightbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Story from './components/Story';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './styles/app.css';
class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <Row>
          <Col>
            <Container>
              <div className="Main">
                <Content />
              </div>
              <div className="Main">
                <Content />
              </div>
              <div className="Main">
                <Content />
              </div>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
