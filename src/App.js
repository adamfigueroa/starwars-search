import React, { Component } from "react";
import AppContext from "./AppContext";
import SearchForm from "./components/SearchForm";
import Header from "./Header";

class App extends Component {
  state = {
    results: [],
    blankResult: false,
    isItLoading: false,
  };

  getSearchQuery = (query, category) => {
    const url = `https://swapi-thinkful.herokuapp.com/api/${category}/?search=${query}`;
    console.log(url);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((event) => Promise.reject(event));
        } else return response.json();
      })
      .then((responseJson) => {
        if (responseJson.count < 1) {
          this.setState({ blankResult: true, isItLoading: false });
        } else {
          this.setState({
            results: responseJson.results,
            isItLoading: false,
            blankResult: false,
          });
        }
      })
      .catch(() =>
        alert("Oh no! Something didn't go as planned, please refresh the page.")
      );
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
          <section className="searchBar">
            <SearchForm />
          </section>
          <section className="resultWindow"></section>
        </AppContext.Provider>
      </main>
    );
  }
}

export default App;
