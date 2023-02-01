
import Navbar from './Components/NavBar/NavBar'
import Home from "./Components/Home/Home"
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';

function App() {
  // const title = 'Welcome to the new Blog'
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Navbar />

          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>

          </div>
        </div>
      </Router>
    </React.Fragment>
  )
}

export default App;

// stop at 6
