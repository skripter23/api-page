import { Component } from "react";
import "./Geek.css";

class Geek extends Component {
  render() {
    let time = new Date().toLocaleString();
    return (
      <div className="chucknorris-activity">
        <div className="about-chucknorris-activity">
          <p>
            The Geek Jokes RESTful API lets you fetch a random geeky/programming
            related joke for use in all sorts of applications.
          </p>
          <p>
            Documentation:{" "}
            <a
              href="https://github.com/sameerkumar18/geek-joke-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/sameerkumar18/geek-joke-api
            </a>
          </p>
        </div>
        <div className="current-time">Rendered at: {time}</div>
        <div className="body">{this.props.fact}</div>
      </div>
    );
  }
}

export default Geek;
