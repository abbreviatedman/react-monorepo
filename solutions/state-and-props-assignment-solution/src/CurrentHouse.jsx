function CurrentHouse(props) {
  let element = <p>Please select a house for more details.</p>;
  if (props.house) {
    element = (
      <div>
	<h3>Current House</h3>
	<p>Name: {props.house.FacilityName}</p>
	<p>Address: {props.house.FacilityAddress}</p>
	<p>Borough: {props.house.Borough}</p>
      </div>
    );
  }
    
  return element;
}

export default CurrentHouse;
