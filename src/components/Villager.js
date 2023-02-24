import React from 'react';

const Villager = ({villager, index}) => {


  return (
                <option value={index}>{villager.name['name-EUen']}</option>
  )
}

export default Villager;