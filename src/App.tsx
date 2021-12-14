import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MakeBorrowRequestPage from "./pages/MakeBorrowRequestPage/MakeBorrowRequestPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MakeBorrowRequestPage" element={<MakeBorrowRequestPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;