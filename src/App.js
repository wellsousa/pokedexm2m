import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './layout/Navbar/Navbar'
import Dashboard from './layout/Dashboard/Dashboard'
import Details from './pokemon/Details/Details'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<Dashboard/>} />
              <Route exact path="/pokemon/:id" element={<Details/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
