import React from 'react';
import {FiHeart} from "react-icons/fi";

const VillagerDetail = ({villager, addToFavourites, index}) => {
        
        const villagerFavourited = () =>{
        addToFavourites(index);
        console.log(index.id);
         }


        return(
                <div className='details'>
                <div className='detail-container'>
                <div className='villager-image'>
                <img src={villager.image_uri}/>
                </div>
                <div className='villager-detail'>
                        <h1>{villager.name['name-EUen']}</h1>
                        <table>
                        <tbody>
                        <tr>
                      <td>Species</td><td>{villager.species}</td></tr>
                      <tr><td>Personality</td><td>{villager.personality}</td></tr>
                      <tr><td>Hobby</td><td>{villager.hobby}</td></tr>
                      <tr><td>Catchphrase</td><td>{villager['catch-phrase']}</td></tr>
                        <tr><td>Saying</td><td>{villager.saying}</td></tr>
                        </tbody>
                        </table>
                </div>
                </div>
                <div>
                <button onClick={villagerFavourited}><FiHeart className="heart"/></button>
                </div>
                </div>
        )
}

export default VillagerDetail;