import React from 'react';

const VillagerFavourites = ({villager}) => {

        return(
        <option value={(villager.id - 1)}>{villager.name['name-EUen']}</option>
        ) 
}

export default VillagerFavourites;