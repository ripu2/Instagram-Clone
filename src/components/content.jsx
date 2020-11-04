import React from 'react';
import Story from './Story';
class Content extends React.Component {
  render() {
    return (
      <div classNames="Main">
        <div class="ui card cards">
          <div class="content">
            <div class="right floated meta">14h</div>
            <div className="box">
              <div className="story">
                <Story url="https://www.vexels.com/media/users//3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg" />
              </div>
            </div>
            <p>Ripu</p>
          </div>
          <div class="image">
            <img />
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
      </div>
    );
  }
}

export default Content;
