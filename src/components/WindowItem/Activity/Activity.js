import { Component } from "react";
import "./Activity.css";

class Activity extends Component {
  render() {
    let time = new Date().toLocaleString();
    return (
      <div>
        <div className="window-activity">
          <div className="about-window-activity">
            <p>
              The Bored API helps you find things to do when you're bored! There
              are fields like the number of participants, activity type, and
              more that help you narrow down your results.
            </p>
            <p>
              Documentation:{" "}
              <a
                href="http://www.boredapi.com/documentation"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.boredapi.com/documentation
              </a>
            </p>
          </div>
          <div className="current-time">Rendered at: {time}</div>
          <div className="title">
            {this.props.title
              ? this.props.title[0].toUpperCase() + this.props.title.slice(1)
              : null}
          </div>
          <div className="activity">{this.props.activity}</div>
          <div className="current-participants-div">
            <div className="current-participants">
              Participants: {this.props.participants}
            </div>
            <div className="current-price">Price: {this.props.price}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
