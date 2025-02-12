import './Sidebar.css';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div className="links">
        {props.children}
      </div>
    </div>
  )
}

export default Sidebar;
