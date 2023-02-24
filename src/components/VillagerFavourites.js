import React from 'react';

const VillagerFavourites = ({villager, index}) => {

        return(
        <option value={index.id}>{villager.name['name-EUen']}</option>
        ) 
}

export default VillagerFavourites;