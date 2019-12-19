import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robot";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  onSearchChange(event) {
    console.log(event.target.value);
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />;
      </div>
    );
  }
}

export default App;
