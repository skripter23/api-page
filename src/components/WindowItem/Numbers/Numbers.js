import { Component } from "react";
import "./Numbers.css";

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: "",
      items: "",
    };
  }

  createFact(url) {
    fetch(url)
      .then((response) => response.text())
      .then((actualData) =>
        this.setState((state) => ({
          items: actualData,
        }))
      )
      .catch((err) => {
        console.log(err.message);
      });
  }

  inputChange = (e) => {
    this.setState((state) => ({
      inputNumber: e.target.value,
    }));
  };

  render() {
    console.log(this.state.items);
    let time = new Date().toLocaleString();
    return (
      <div>
        <div className="number-activity">
          <div className="about-number-activity">
            <p>An API for interesting facts about numbers</p>
            <p>
              Inputs: <br /> Math Facts - just natural numbers! <br /> Trivia
              Facts - just natural numbers! <br /> Date Facts - just date mm/dd
              or m/d! <br /> Year Facts = just year yyyy!
            </p>
            <p>
              Documentation:{" "}
              <a
                href="http://numbersapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://numbersapi.com/
              </a>
            </p>
          </div>
          <div className="current-time">Rendered at: {time}</div>
          <div className="facts">
            <input
              onChange={this.inputChange}
              type="text"
              placeholder="Type here"
            />
            <div
              onClick={() =>
                this.createFact(
                  `http://numbersapi.com/${this.state.inputNumber}/math`
                )
              }
              className="random-math-fact"
            >
              Math Fact
            </div>
            <div
              onClick={() =>
                this.createFact(
                  `http://numbersapi.com/${this.state.inputNumber}/trivia`
                )
              }
              className="random-trivia-fact"
            >
              Trivia Fact
            </div>
            <div
              onClick={() =>
                this.createFact(
                  `http://numbersapi.com/${this.state.inputNumber}/date`
                )
              }
              className="random-date-fact"
            >
              Date Fact
            </div>
            <div
              onClick={() =>
                this.createFact(
                  `http://numbersapi.com/${this.state.inputNumber}/year`
                )
              }
              className="random-math-fact"
            >
              Year Fact
            </div>
          </div>
          <div className="facts">
            <div
              onClick={() =>
                this.createFact("http://numbersapi.com/random/math")
              }
              className="random-math-fact"
            >
              Random Math Fact
            </div>
            <div
              onClick={() =>
                this.createFact("http://numbersapi.com/random/trivia")
              }
              className="random-trivia-fact"
            >
              Random Trivia Fact
            </div>
            <div
              onClick={() =>
                this.createFact("http://numbersapi.com/random/date")
              }
              className="random-date-fact"
            >
              Random Date Fact
            </div>
          </div>
          <div className="fact-number">
            {this.state.items !== "" &&
            !this.state.items.includes("DOCTYP") &&
            !this.state.items.includes("Invalid")
              ? this.state.items
              : "Click on Buttons!"}
          </div>
        </div>
      </div>
    );
  }
}

export default Number;
