import { useState, useEffect } from 'react';
import { show } from './services/starshipService'; 
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import './App.css';


const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const Data = await show(''); 
      setStarships(Data);
    };
    getStarships();
  }, []);

  const handleSearch = async (searchShip) => {
    const Data = await show(searchShip);
    setStarships(Data);
  };

  return (
    <div>
      <StarshipSearch search={handleSearch} />
      <StarshipList starships={starships} />
    </div>
  );
};

export default App;
