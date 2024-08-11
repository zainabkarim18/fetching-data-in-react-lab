import { useState } from 'react';

const StarshipSearch = ({ search }) => {
  const [searchShip, setsearchShip] = useState('');

  const handleChange = (event) => {
    setsearchShip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search(searchShip);
  };

  return (
    <>
      <h1>Star Wars API</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchShip}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

    </>
  );
};

export default StarshipSearch;
