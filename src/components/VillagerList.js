import React from 'react';
import Villager from './Villager';
import VillagerSpecies from './VillagerSpecies';

const VillagerList = ({villagers, speciesSelection, speciesList, onVillagerClicked}) => {


        const ListOfVillagers = villagers.map((villager, index) => {
                return <Villager villager={villager} index={index} key={index}/>
                })

        const ListOfSpecies = villagers.map((villagers, index) => {
                return <VillagerSpecies villager={villagers} index={index} key={index} speciesSelection={speciesSelection}/>})

        const villagerSelected = function(event){
                const chosenVillager = villagers[event.target.value];
                onVillagerClicked(chosenVillager);
        }
        

  return (
        <div className='dropdown'>
        <select defaultValue = '' onChange={speciesSelection}>
                <option value=''>
                        Select A Villager By Species
                </option>
                {ListOfSpecies}
        </select>
        <select defaultValue = '' onChange={villagerSelected}>
                <option value=''>
                        Select A Villager
                </option>
                {ListOfVillagers}
        </select>
        </div>
  )
}

export default VillagerList;