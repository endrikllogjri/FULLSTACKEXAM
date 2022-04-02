import { useState } from "react";
import PetList from "./PetList";

function Main() {
  const [pets, setPets] = useState([]);

  const removeFromDom = (petsId) => {
    setPets(pets.filter((pets) => pets._id != petsId));
  };

  return (
    <div>
      <PetList pets={pets} setPets={setPets} removeFromDom={removeFromDom} />
    </div>
  );
}

export default Main;
