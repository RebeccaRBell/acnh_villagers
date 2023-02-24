import React, {useState, useEffect} from 'react';
import VillagerList from '../components/VillagerList';
import VillagerDetail from '../components/VillagerDetail';
import logo from '../images/acnh_logo.png';

const VillagerContainer = () => {

      const [villagers, setVillagers] = useState([]);
      const [selectedVillager, setSelectedVillager] = useState(null);
      const [species, setSpecies] = useState([]);
      
      const speciesList = ["Anteater", "Bear", "Bird", "Bull", "Cat", "Cub", "Chicken", "Cow", "Alligator", "Deer", "Dog", "Duck", "Elephant", "Frog", "Goat", "Gorilla", "Hamster", "Hippo", "Horse", "Koala", "Kangaroo", "Monkey", "Lion", "Mouse", "Octopus", "Ostrich", "Eagle", "Penguin", "Pig", "Rabbit", "Rhino", "Sheep", "Squirrel", "Tiger", "Wolf"];

      useEffect(() => {
        getVillagers();
      },)

            const speciesSelection = (species) => {
            setSpecies(species);
        }

           const onVillagerClicked = function(villager){
                setSelectedVillager(villager);
        }



      const getVillagers = function(){
            fetch('https://acnhapi.com/v1a/villagers')
            .then(response => response.json())
            .then(villagers => setVillagers(villagers));
      }

  return(
        <div className='logo-background'>
            <img src={logo} className='acnh-logo' alt='Animal Crossing: New Horizons Logo'/>
            <h1>Villager Information Centre</h1>
            <VillagerList villagers={villagers} speciesList={speciesList} speciesSelection={speciesSelection} onVillagerClicked={onVillagerClicked}/>
            {selectedVillager ? <VillagerDetail villager={selectedVillager} /> : null}
        </div>
  )
}

export default VillagerContainer;