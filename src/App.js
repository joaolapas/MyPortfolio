import React from 'react';
import Home from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
