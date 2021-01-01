import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";
import renderer from "react-test-renderer";

describe("SearchForm Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchForm />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI", () => {
    const tree = renderer.create(<SearchForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
