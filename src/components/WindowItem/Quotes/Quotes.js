import { Component } from "react";
import "./Quotes.css";

class Quotes extends Component {
  render() {
    let time = new Date().toLocaleString();
    return (
      <div>
        <div className="window-quotes">
          <div className="about-quotes-activity">
            <p>
              The FavQs API allows you to collect, discover, and share your
              favorite quotes.
            </p>
            <p>
              Documentation:{" "}
              <a
                href="https://favqs.com/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://favqs.com/api
              </a>
            </p>
          </div>
          <div className="current-time">Rendered at: {time}</div>
          <div className="title">
            {this.props.title
              ? this.props.title[0].toUpperCase() + this.props.title.slice(1)
              : null}
          </div>
          <div className="body">{this.props.body}</div>
          <div className="current-tags">Tags: {this.props.tags}</div>
        </div>
      </div>
    );
  }
}

export default Quotes;
