import { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WindowItem from "../WindowItem/WindowItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  createNode = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((actualData) =>
        this.setState((state) => ({
          items: actualData,
        }))
      )
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    console.log(this.state.items);
    let tags = "";
    if (this.state.items.quote?.tags.length > 1) {
      for (let key in this.state.items.quote.tags) {
        tags = tags + this.state.items.quote.tags[key] + ", ";
      }
      tags = tags.slice(0, tags.length - 2);
    } else {
      tags = this.state.items.quote?.tags;
    }
    return (
      <Router>
        <div>
          <div className="App">
            <div className="menu">
              <MenuItem
                ToLink="/quotes"
                text="FavQs API"
                createNode={() => this.createNode("https://favqs.com/api/qotd")}
              />
              <MenuItem ToLink="/numbers" text="Numbers API" />
              <MenuItem
                ToLink="/chucknorris"
                text="ChuckNorris API"
                createNode={() =>
                  this.createNode("https://api.chucknorris.io/jokes/random")
                }
              />
              <MenuItem
                ToLink="/advice"
                text="Advice Slip API"
                createNode={() =>
                  this.createNode("https://api.adviceslip.com/advice")
                }
              />
              <MenuItem
                ToLink="/dogs"
                text="Dog API"
                createNode={() =>
                  this.createNode("https://dog.ceo/api/breeds/image/random")
                }
              />
              <MenuItem
                ToLink="/geek"
                text="Geek Jokes API"
                createNode={() =>
                  this.createNode(
                    "https://geek-jokes.sameerkumar.website/api?format=json"
                  )
                }
              />
            </div>
            <div className="window">
              <Routes>
                <Route
                  path="/activity"
                  element={
                    <WindowItem
                      about="activity"
                      title={this.state.items.type}
                      activity={this.state.items.activity}
                      participants={this.state.items.participants}
                      price={this.state.items.price}
                    />
                  }
                />
                <Route
                  path="/quotes"
                  element={
                    <WindowItem
                      about="quotes"
                      title={this.state.items.quote?.author}
                      body={this.state.items.quote?.body}
                      tags={tags}
                    />
                  }
                />
                <Route
                  path="/numbers"
                  element={<WindowItem about="numbers" />}
                />
                <Route
                  path="/chucknorris"
                  element={
                    <WindowItem
                      about="chucknorris"
                      fact={
                        this.state.items?.value ? this.state.items.value : null
                      }
                    />
                  }
                />
                <Route
                  path="/advice"
                  element={
                    <WindowItem
                      about="advice"
                      fact={
                        this.state.items.slip?.advice
                          ? this.state.items.slip?.advice
                          : null
                      }
                    />
                  }
                />
                <Route
                  path="/dogs"
                  element={
                    <WindowItem about="dogs" img={this.state.items?.message} />
                  }
                />
                <Route
                  path="/geek"
                  element={
                    <WindowItem about="geeks" fact={this.state.items.joke} />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
