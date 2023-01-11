
import Navbar from './Components/NavBar/NavBar'
import Home from "./Components/Home/Home"

function App() {
  const title = 'Welcome to the new Blog'
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default App;

// stop at 6
