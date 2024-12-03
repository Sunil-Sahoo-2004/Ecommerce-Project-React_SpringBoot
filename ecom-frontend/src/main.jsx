import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { AppProvider } from "./Context/Context.jsx";
// import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router> */}
      <AppProvider>
        <App />
      </AppProvider>
    {/* </Router> */}
  </React.StrictMode>
);
