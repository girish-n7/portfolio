// import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchPage from "./components/SwitchPage";

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <SwitchPage />
      </Router>
      <Footer />
    </div>
  );
}
