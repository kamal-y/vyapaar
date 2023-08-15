import React, { useState } from 'react'
import { chances_cards, chest_cards } from '../data/cards_details'
import chance_img from '../media/chance_img.png';
import chest_img from '../media/chest_img.png';

function Chance_n_Chest_Card(props) {

  return (
    <div onClick={props.chanceIndOp.nextChanceInd} style={{ gridRow: '5 / span 4', gridColumn: '6 / span 3', position: 'relative', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", borderRadius:"0.8rem", backgroundColor:"rgb(255,246,246)"}}>
      <img src={chance_img} className="h-full w-auto mx-auto opacity-10" alt="Chance Image" />
      <div className='flex flex-col items-center justify-evenly text-black absolute top-0 left-0 w-full h-full'>
        <div className="text-lg font-bold">{chances_cards[props.chanceIndOp.chanceInd].title}</div>
        <div className='text-sm'>{chances_cards[props.chanceIndOp.chanceInd].description}</div>
      </div>
    </div>
  )
}

export default Chance_n_Chest_Card