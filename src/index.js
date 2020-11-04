import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import StoryBar from './components/storyBar';
import Content from './components/content';
import RightBar from './components/rightbar';
import Container from 'react-bootstrap/Container';
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <div className="Main">
            <Content />
          </div>
        </Container>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
