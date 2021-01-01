import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Looks like something fishy happened...Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
};
