import React, { Component } from "react";
import AppContext from "./AppContext";
import Header from "./Header";

class App extends Component {
  state = {
    results: [],
    blankResult: false,
    isItLoading: false
  };

  getSearchQuery = (query, category) => {
    const url = `https://swapi-thinkful.herokuapp.com/api/${category}/?search=${query}`;
    console.log(url)
  };

  render() {
    return (
      <main className="App">
        <Header />
        <AppContext.Provider
          value={{
            results: this.state.results,
            getSearchQuery: this.getSearchQuery,
            blankResult: this.state.blankResult,
          }}
        >
          <section className="searchBar"></section>
          <section className="resultWindow"></section>
        </AppContext.Provider>
      </main>
    );
  }
}

export default App;
