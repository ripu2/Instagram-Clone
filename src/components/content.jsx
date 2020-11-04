import React from 'react';
import Story from './Story';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/app.css';
class Content extends React.Component {
  render() {
    return (
      <>
        <div class="ui card">
          <div class="content">
            <div class="right floated meta">14h</div>
            <img
              class="ui avatar image"
              src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
            />
            Elliot
          </div>
          <div class="image">
            <img
              className="Storyimg"
              src="https://eternalarrival.com/wp-content/uploads/2020/07/Copy-of-Untitled-Design-3.jpg"
            />
          </div>
          <div class="content">
            <span class="right floated">
              <i class="heart outline like icon"></i>
              17 likes
            </span>
            <i class="comment icon"></i>3 comments
          </div>
          <div class="extra content">
            <div class="ui large transparent left icon input">
              <i class="heart outline icon"></i>
              <input type="text" placeholder="Add Comment..." />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
