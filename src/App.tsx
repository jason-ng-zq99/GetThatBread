import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import RequestsDisplayPage from "./pages/RequestsDisplayPage/RequestsDisplayPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/RequestsDisplayPage" element={<RequestsDisplayPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;