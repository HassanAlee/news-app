import React from "react";
import ReactDOM from "react-dom/client";
import App, { store } from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
