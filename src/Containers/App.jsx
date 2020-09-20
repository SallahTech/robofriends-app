import React, { Component } from "react";
import CardList from "../Component/CardList";
import SearchBox from "../Component/SearchBox";
import Scroll from '../Component/Scroll'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      Searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    // console.log(events);
    this.setState({ Searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.Searchfield.toLowerCase());
    });

    if(this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {

      return (
        <div className="tc">
          <h1 className="f2">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>

            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
