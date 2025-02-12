import './Navbar.css';

function Navbar(props) {
  return (
    <div className="navbar">
      <h1>Star Wars Data App</h1>
      <div className="links">
        {props.children}
      </div>
    </div>
  );
}

export default Navbar;
