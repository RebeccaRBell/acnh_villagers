import React from 'react';

const VillagerSpecies = ({villager, index, speciesSelection}) => {


        return (
                <option value={index} onClick={speciesSelection}>{villager.species}</option>
        )
};
 export default VillagerSpecies;