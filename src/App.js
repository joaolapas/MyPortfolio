import React from "react";
import Home from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./pages/contactForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-form" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
