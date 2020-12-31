import React, { Component } from "react";
import AppContext from "../AppContext";

class SearchForm extends Component {
  state = {
    query: "",
    category: "none",
    touched: false,
  };
  static contextType = AppContext;

  render() {
    return (
      <form className="searchForm">
        <label htmlFor="query">Search term:</label>
        <input
          type="text"
          className="searchQuery"
          name="query"
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <label htmlFor="category">
          What category would you like to search?
        </label>
        <select
          className="categorySelect"
          name="category"
          onChange={(e) => this.setState({ category: e.target.value })}
        >
            <option value="none">Select a category..</option>
            <option>planets</option>
            <option>spaceships</option>
            <option>vehicles</option>
            <option>characters</option>
            <option>films</option>
            <option>species</option>
        </select>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
