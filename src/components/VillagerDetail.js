import React from 'react';

const VillagerDetail = ({villager}) => {
        return(
                <div className='detail-container'>
                <div className='villager-image'>
                <img src={villager.image_uri}/>
                </div>
                <div className='villager-detail'>
                        <h1>{villager.name['name-EUen']}</h1>
                        <table>
                        <tr>
                      <td>Species</td><td>{villager.species}</td></tr>
                      <tr><td>Personality</td><td>{villager.personality}</td></tr>
                      <tr><td>Hobby</td><td>{villager.hobby}</td></tr>
                      <tr><td>Catchphrase</td><td>{villager['catch-phrase']}</td></tr>
                        <tr><td>Saying</td><td>{villager.saying}</td></tr>
                        </table>
                </div>
                </div>
        )
}

export default VillagerDetail;