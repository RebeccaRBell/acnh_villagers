import React from 'react';

const VillagerFavourites = ({villager, index}) => {

        return(
        <option value={index}>{villager.name['name-EUen']}</option>
        ) 
}

export default VillagerFavourites;