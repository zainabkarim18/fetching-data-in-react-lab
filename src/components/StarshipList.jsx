import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
   if (starships.length === 0) {
    return <h3>Loading...</h3>;
  }

    return (
    <div>
      <h2>Starships</h2>
      <p>Number of results: {starships.length}</p>
      <ul>
        {starships.map(starship => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </div>
  );
};

export default StarshipList;
