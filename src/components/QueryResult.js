import React, { Component } from "react";
import AppContext from "../AppContext";
import "./QueryResult.css"

class QueryResult extends Component {
  static contextType = AppContext;

  snagResults = () => {
    if (this.context.blankResult) {
      return (
        <h3>
          No results for your search term, make sure you chose the right
          category and try again!
        </h3>
      );
    }
    let queryList = this.context.results.map((result) => {
      return <li key={result.name}>{result.name}</li>;
    });
    return queryList;
  };

  render() {
    return (
      <div>
        {this.context.results.length > 0 && (
          <h2 className="queryResultHeader">Results:</h2>
        )}
        <ul className="resultList">{this.snagResults()}</ul>
      </div>
    );
  }
};

export default QueryResult;
