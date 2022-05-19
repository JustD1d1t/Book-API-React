import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./components/shared/Layout/Layout";
import { BookContextProvider } from "./context/books/bookContext";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookContextProvider>
      <Router>
        <Layout>
          <App />
        </Layout>
      </Router>
    </BookContextProvider>
  </React.StrictMode>
);
