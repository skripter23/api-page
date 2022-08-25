import { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

class MenuItem extends Component {
  render() {
    return (
      <Link
        to={this.props.ToLink}
        onClick={this.props.createNode}
        className="menu-item"
        style={{ textDecoration: "none" }}
      >
        <span className="menu-item-text">{this.props.text}</span>
      </Link>
    );
  }
}

export default MenuItem;
