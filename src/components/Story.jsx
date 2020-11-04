import React from 'react';
import '../styles/app.css';
class Story extends React.Component {
  render(props) {
    return (
      <>
        <img src={this.props.url}></img>
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" />
        </svg>
      </>
    );
  }
}

export default Story;
