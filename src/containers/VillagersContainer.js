import React, {useState, useEffect} from 'react';
import VillagerList from '../components/VillagerList';
import logo from '../images/acnh_logo.png';

const VillagerContainer = () => {

      const [villagers, setVillagers] = useState([]);
      const [selectedVillager, setSelectedVillager] = useState(null);
      const [species, setSpecies] = useState([]);

      useEffect(() => {
        getVillagers();
      },)

            const speciesSelection = (villager) => {
            setSpecies(villager.species);
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
            <VillagerList villagers={villagers} species={species} speciesSelection={speciesSelection}/>
            
            
        </div>
  )
}

export default VillagerContainer;