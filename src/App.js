import React, { Component } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import QueryResult from "./components/QueryResult";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";

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
        <section className="searchBar">
          <AppContext.Provider
            value={{
              results: this.state.results,
              getSearchQuery: this.getSearchQuery,
              blankResult: this.state.blankResult,
            }}
          >
            <SearchForm />
          </AppContext.Provider>
        </section>
        <section className="resultWindow">
          <AppContext.Provider
            value={{
              results: this.state.results,
              getSearchQuery: this.getSearchQuery,
              blankResult: this.state.blankResult,
            }}
          >
            <ErrorBoundary>
              <QueryResult />
            </ErrorBoundary>
          </AppContext.Provider>
        </section>
      </main>
    );
  }
};

App.propTypes = {
  results: PropTypes.array,
  blankResult: PropTypes.bool,
  isItLoading: PropTypes.bool,
};

export default App;
