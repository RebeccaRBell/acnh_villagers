import React from 'react';
import Villager from './Villager';
import VillagerFavourites from './VillagerFavourites';
import VillagerSpecies from './VillagerSpecies';

const VillagerList = ({villagers, speciesList, onVillagerClicked, selectedSpecies, onSpeciesClicked, addToFavourites, favourite}) => {


        const ListOfVillagers = villagers.map((villager, index) => {
                if (villager.species === selectedSpecies){
                return <Villager villager={villager} index={index} key={index} favourite={favourite} addToFavourites={addToFavourites}/>
}})

        const ListOfSpecies = speciesList.map((species, index) => {
                return <VillagerSpecies species={species} key={index}/>;
        })

        const ListOfFavourites = villagers.map((villager, index) => {
                
                if (villager.id === favourite){
                return <VillagerFavourites villager={villager} index={index} key={index}/>
          
        }})

        const villagerSelected = function(event){
                const chosenVillager = villagers[event.target.value];
                onVillagerClicked(chosenVillager);
        }
        const speciesSelected = function(event){
                const chosenSpecies = event.target.value;
                onSpeciesClicked(chosenSpecies);
        }

        

  return (
        <div className='dropdown'>
 <select defaultValue = '' onChange={speciesSelected}>
                <option value=''>
                        Select A Villager By Species
                </option>
                {ListOfSpecies}
        </select>
        {selectedSpecies ? <select defaultValue = '' onChange={villagerSelected}>
                <option value=''>
                        Select A Villager
                </option>
                {ListOfVillagers}
        </select> : null }
        { favourite ? <select defaultValue = ''>
                <option value=''>
                        Favourite Villagers
                </option>
                {ListOfFavourites}
        </select> : null }
        </div>
  )
}

export default VillagerList;