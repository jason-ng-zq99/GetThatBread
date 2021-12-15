import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import BorrowPage from "./pages/BorrowFormPage/BorrowFormPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<BorrowPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;