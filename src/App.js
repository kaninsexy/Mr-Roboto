import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";
import { SearchBox } from "./components/search-box/seach-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = dude => {
    this.setState({ searchfield: dude.target.value });
  };
  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monsFil =>
      monsFil.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Mr. Roboto</h1>
        <SearchBox
          placeholder2="Search Robot Here Bitch!"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
