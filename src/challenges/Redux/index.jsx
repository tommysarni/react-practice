import React from "react"; // eslint-disable-line
import { Provider } from "react-redux";
import store from "./store";

// Component to practice redux

const ReduxComponent = () => {
  return (
    <Provider store={store}>
      <div>
        <h3>App Goes Here</h3>
      </div>
    </Provider>
  );
};

export default ReduxComponent;
