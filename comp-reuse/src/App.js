import { useState } from "react";
import AnimalShow from "./AnimalShow";

const App = () => {
  const [animals, setAnimals] = useState([]);
  let allAnimal = ["cow", "dog", "horse", "horse", "gator"];
  const generateRandomAnimal = () => {
    return allAnimal[Math.floor(Math.random() * allAnimal.length)];
  };
  const handleClick = () => {
    setAnimals([...animals, generateRandomAnimal()]);
  };
  const renderAnimalShow = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add an Animal</button>
      <div>{renderAnimalShow}</div>
    </div>
  );
};

export default App;
