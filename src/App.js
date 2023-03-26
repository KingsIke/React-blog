
import Navbar from './Components/NavBar/NavBar'
import Home from "./Components/Home/Home"
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import Create from './Components/Create/Create';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import NotFound from './NotFound/NotFound';

function App() {
  // const title = 'Welcome to the new Blog'
  return (

    < React.Fragment >
      <Router>
        <div className="App">
          <Navbar />

          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/blogs/:id' element={<BlogDetails />} />
              <Route path='*' element={<NotFound />} />



            </Routes>

          </div>
        </div>
      </Router>
    </React.Fragment >
  )
}

export default App;

// stop at 6
