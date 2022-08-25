import { Component } from "react";
import "./Dogs.css";

class Dogs extends Component {
  render() {
    let time = new Date().toLocaleString();
    return (
      <div className="chucknorris-activity">
        <div className="about-chucknorris-activity">
          <p>
            Original dataset taken from the the Stanford Dogs Dataset. Logo
            thanks to NotKnifoon.
          </p>
          <p>
            Documentation:{" "}
            <a
              href="https://dog.ceo/dog-api/documentation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://dog.ceo/dog-api/documentation/
            </a>
          </p>
        </div>
        <div className="current-dog-time">Rendered at: {time}</div>
        <div className="dogs">
          <img src={this.props.img} alt="new" />
        </div>
      </div>
    );
  }
}

export default Dogs;
