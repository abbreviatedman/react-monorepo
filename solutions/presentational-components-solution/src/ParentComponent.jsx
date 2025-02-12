import './ParentComponent.css';

function ParentComponent(props) {
  return (
    <div className="parent-container">
      <h2>Data from the Star Wars API</h2>
      <div className="data-container">
        {props.children}
      </div>

    </div>
  )
}

export default ParentComponent;
