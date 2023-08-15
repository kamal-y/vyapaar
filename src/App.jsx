import React,{useState} from 'react'
import Gamecard from '../components/Gamecard'
import {chances_cards} from '../data/cards_details';
function App() {
  const [chanceInd, setChanceInd ] = useState(0);
  const nextChanceInd = ()=> setChanceInd((chanceInd+1)%chances_cards.length);
  return (
    <div className='h-screen w-screen flex justify-center p-5'>
      <Gamecard chanceIndOp ={{chanceInd, nextChanceInd}}/>
    </div>
  )
}

export default App