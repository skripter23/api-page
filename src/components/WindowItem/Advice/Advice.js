import { Component } from "react";

class Advice extends Component {
  render() {
    let time = new Date().toLocaleString();
    return (
      <div className="chucknorris-activity">
        <div className="about-chucknorris-activity">
          <p>
            The Advice Slip JSON API is provided for free. 😎 It currently gives
            out over 10 million pieces of advice every year
          </p>
          <p>
            Documentation:{" "}
            <a
              href="https://api.adviceslip.com/#top"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://api.adviceslip.com/#top
            </a>
          </p>
        </div>
        <div className="current-time">Rendered at: {time}</div>
        <div className="chucknorris-title">Advice</div>
        <div className="body">{this.props.fact}</div>
      </div>
    );
  }
}

export default Advice;
