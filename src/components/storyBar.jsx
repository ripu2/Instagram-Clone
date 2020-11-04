import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Story from './Story';
class storyBar extends React.Component {
  render() {
    return (
      <Jumbotron>
        <div className="Recomendation">
          <Story url="https://www.vexels.com/media/users//3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg" />
        </div>
        <div className="Recomendation">
          <Story url="https://www.vexels.com/media/users//3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg" />
        </div>
        <div className="Recomendation">
          <Story url="https://www.vexels.com/media/users//3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg" />
        </div>
      </Jumbotron>
    );
  }
}

export default storyBar;
