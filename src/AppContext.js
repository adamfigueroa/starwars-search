import React from "react";
import PropTypes from "prop-types"

const AppContext = React.createContext({
  results: [],
  getSearchQuery: () => {},
  blankResult: false,
});

AppContext.displayName = "AppContext";

AppContext.propTypes = {
    results: PropTypes.array,
    getSearchQuery: PropTypes.func,
    blankResult: PropTypes.bool,
}

export default AppContext;
