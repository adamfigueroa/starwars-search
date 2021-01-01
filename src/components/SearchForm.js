import React, { Component } from "react";
import PropTypes from "prop-types"
import AppContext from "../AppContext";
import "./SearchForm.css"

class SearchForm extends Component {
  state = {
    query: "",
    category: "none",
    touched: false,
  };

  static contextType = AppContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.getSearchQuery(this.state.query, this.state.category);
  };

  validateForm = () => {
    if (this.state.query === "" || this.state.category === "none") {
      return true;
    }
  };

  render() {
    return (
      <form className="searchForm" onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor="query">Search term:</label>
        <input
          type="text"
          className="searchQuery"
          name="query"
          onChange={(e) =>
            this.setState({ query: e.target.value, touched: true })
          }
        />
        {this.state.touched && this.state.query === "" && (
          <p className="errorBox">Search term cannot be blank</p>
        )}
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
          <option>starships</option>
          <option>vehicles</option>
          <option>people</option>
          <option>films</option>
          <option>species</option>
        </select>
        {this.state.category === "none" && this.state.touched && (
          <p className="errorBoxCategory">Please select a category</p>
        )}
        <button type="submit" disabled={this.validateForm()}>
          Search
        </button>
      </form>
    );
  }
};

SearchForm.propTypes = {
    query: PropTypes.string,
    category: PropTypes.string,
    touched: PropTypes.bool,
}

export default SearchForm;
