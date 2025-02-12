import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';

function App() {
  return (
    <div className="app">
      <Navbar>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </Navbar>
      <Sidebar>
        <a href="#people">People</a>
        <a href="#planets">Planets</a>
        <a href="#starships">Starships</a>
      </Sidebar>
      <ParentComponent>
        <div>
          <h3>Star Wars Characters</h3>
          <ChildComponent />
        </div>
      </ParentComponent>
    </div>
  );
}

export default App
