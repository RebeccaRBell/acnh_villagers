import React, {useState, useEffect} from 'react';
import VillagerList from '../components/VillagerList';
import VillagerDetail from '../components/VillagerDetail';
import logo from '../images/acnh_logo.png';

const VillagerContainer = () => {

      const [villagers, setVillagers] = useState([]);
      const [selectedVillager, setSelectedVillager] = useState(null);
      const [selectedSpecies, setSelectedSpecies] = useState(null);
      const [favourite, setFavourite] = useState([]);
      
      const speciesList = ["Anteater", "Bear", "Bird", "Bull", "Cat", "Cub", "Chicken", "Cow", "Alligator", "Deer", "Dog", "Duck", "Elephant", "Frog", "Goat", "Gorilla", "Hamster", "Hippo", "Horse", "Koala", "Kangaroo", "Monkey", "Lion", "Mouse", "Octopus", "Ostrich", "Eagle", "Penguin", "Pig", "Rabbit", "Rhino", "Sheep", "Squirrel", "Tiger", "Wolf"];

      useEffect(() => {
        getVillagers();
      },)

            const onSpeciesClicked = function(species){
                  setSelectedSpecies(species);
                  console.log(species);
        }

           const onVillagerClicked = function(villager){
            console.log(villager.id)
                setSelectedVillager(villager);
        }

        const addToFavourites = function(villager){
            const fullFavourites = [...favourite, villager];
            setFavourite(fullFavourites);
            console.log(favourite);
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
            <VillagerList villagers={villagers} speciesList={speciesList} onSpeciesClicked={onSpeciesClicked} onVillagerClicked={onVillagerClicked} selectedSpecies={selectedSpecies} favourite={favourite} addToFavourites={addToFavourites}/>
            {selectedVillager ? <VillagerDetail villager={selectedVillager} index={selectedVillager} favourite={favourite} villagers={villagers} addToFavourites={addToFavourites}/>  : null}
        </div>
  )
}

export default VillagerContainer;