import House from './House';

function HouseList(props) {
  return (
    <div>
      {props.houses.map(house => (
	<House key={house.id} selectHouse={props.selectHouse} house={house} />
      ))}
    </div>
  );
}

export default HouseList;
