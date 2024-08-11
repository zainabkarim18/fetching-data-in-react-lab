const StarshipCard = ({ starship }) => {
  return (
    <div className="starship">
      <h2>{starship.name}</h2>
      <p>Class: {starship.starship_class}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Model: {starship.model}</p>
    </div>
  );
};

export default StarshipCard;
