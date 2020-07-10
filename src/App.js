import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Projects from './contents/Projects';
import Contact from './contents/Contact';

function App() {
  return (
    <Router basename="/jagoergen/WEB215/Lesson14">
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Education">
          <Education />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;