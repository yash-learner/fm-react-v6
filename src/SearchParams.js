import { useState } from "react";


const ANIMALS = ["", "Bird", "Dog", "Cat", "Rabbit", "Reptile"];

const SearchParams = () => {

  const [location, setLocation] = useState("Seattle, WA"); //destructuring
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location" >
          location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)} //for accesibility
            value={animal}
          >
            {
              ANIMALS.map(animal => (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)} //for accesibility
            value={breed}
          >
            {
              breeds.map(breed => (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ))
            }
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div >
  );
};

export default SearchParams;
