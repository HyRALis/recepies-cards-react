import React, { Component } from "react";
import "./App.css";
import Recipe from "./Components/recipe";
import Navbar from "./Components/navbar";
class App extends Component {
  state = {
    APP_ID: "dbda41a8",
    APP_KEY: "321f361b1dc8ce86fdc56c6029754ed6",
    search: "",
    finishedSearch: "",
    recipes: [],
  };

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = async (e) => {
    const { APP_ID, APP_KEY, finishedSearch } = this.state;
    const fetchedData = await fetch(
      `https://api.edamam.com/search?q=${finishedSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await fetchedData.json();
    this.setState({ recipes: data.hits });
    console.log(this.state.recipes);
  };

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  };

  getSearch = (e) => {
    e.preventDefault();
    let input = this.state.search;
    this.setState({ finishedSearch: input }, () => {
      this.getRecipes();
    });
    console.log(this.state.finishedSearch);
  };

  render() {
    return (
      <div className="App">
        <div className="mask">
          <Navbar
            search={this.state.search}
            finishedSearch={this.state.finishedSearch}
            getInput={this.getSearch}
            updateInput={this.updateSearch}
          />
          <div className="container h-75 w-100 overflow-auto">
            <div className="row">
              {this.state.recipes.map((rec, index) => (
                <Recipe
                  key={rec.recipe.label + rec.recipe.totalTime}
                  title={rec.recipe.label}
                  calories={rec.recipe.calories}
                  image={rec.recipe.image}
                  totalTime={rec.recipe.totalTime}
                  ingredients={rec.recipe.ingredients}
                  id={`${this.state.finishedSearch}${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
