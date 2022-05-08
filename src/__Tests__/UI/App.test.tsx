import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import App from "../../App";
import { rootReducer } from "../../store/rootReducer";
import { renderWithRedux } from "../utils/renderWithredux";

describe("App test", () => {
  let store: any;
  beforeEach(() => {
    store = createStore(rootReducer);
  });
  test("render app component", () => {
    render(renderWithRedux(<App />, "/", store));
    expect(screen.getByTestId('app')).toBeInTheDocument()
  });
});
