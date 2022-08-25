import { Component } from "react";
import "./ChuckNorris.css";

class ChuckNorris extends Component {
  render() {
    let time = new Date().toLocaleString();
    return (
      <div className="chucknorris-activity">
        <div className="about-chucknorris-activity">
          <p>
            chucknorris.io is a free JSON API for hand curated Chuck Norris
            facts.
          </p>
          <p>
            Chuck Norris facts are satirical factoids about martial artist and
            actor Chuck Norris that have become an Internet phenomenon and as a
            result have become widespread in popular culture. The 'facts' are
            normally absurd hyperbolic claims about Norris' toughness, attitude,
            virility, sophistication, and masculinity.
          </p>
          <p>
            Documentation:{" "}
            <a
              href="https://api.chucknorris.io/#!"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://api.chucknorris.io/#!
            </a>
          </p>
        </div>
        <div className="current-time">Rendered at: {time}</div>
        <div className="chucknorris-title">Fact</div>
        <div className="body">{this.props.fact}</div>
      </div>
    );
  }
}

export default ChuckNorris;
