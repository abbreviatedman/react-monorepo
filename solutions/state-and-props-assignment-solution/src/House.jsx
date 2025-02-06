function House(props) {
  return (
    <li onClick={() => props.selectHouse(props.house)}>{props.house.FacilityName}</li>
  )
}

export default House;
