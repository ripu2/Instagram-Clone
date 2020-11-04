import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import StoryBar from './components/storyBar';
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <StoryBar />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
