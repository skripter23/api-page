import { Component } from "react";
import Activity from "./Activity/Activity";
import Advice from "./Advice/Advice";
import ChuckNorris from "./ChuckNorris/ChuckNorris";
import Number from "./Numbers/Numbers";
import Quotes from "./Quotes/Quotes";
import Dogs from "./Dogs/Dogs";
import Geek from "./Geek/Geek";

class WindowItem extends Component {
  render() {
    if (this.props.about === "activity") {
      return (
        <Activity
          title={this.props.title}
          activity={this.props.activity}
          participants={this.props.participants}
          price={this.props.price}
        />
      );
    }
    if (this.props.about === "quotes") {
      return (
        <Quotes
          title={this.props.title}
          body={this.props.body}
          tags={this.props.tags}
        />
      );
    }
    if (this.props.about === "numbers") {
      return <Number />;
    }
    if (this.props.about === "chucknorris") {
      return <ChuckNorris fact={this.props.fact} />;
    }
    if (this.props.about === "advice") {
      return <Advice fact={this.props.fact} title={this.props.title} />;
    }
    if (this.props.about === "dogs") {
      return <Dogs img={this.props.img} />;
    }
    if (this.props.about === "geeks") {
      return <Geek fact={this.props.fact} />;
    }
  }
}

export default WindowItem;
