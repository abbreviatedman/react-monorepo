import { useState } from 'react';

import HouseList from './HouseList';
import CurrentHouse from './CurrentHouse';
import firehouses from './firehouses.json';

function App() {
  const [house, setHouse] = useState(null);
  const [houses] = useState(firehouses);

  function selectHouse(house) {
    setHouse(house);
  }

  return (
    <div>
      <CurrentHouse house={house} />
      <HouseList houses={houses} selectHouse={selectHouse} />
    </div>
  )
}

export default App
