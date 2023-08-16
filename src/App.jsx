import React,{useState} from 'react'
import Gamecard from '../components/Gamecard'
import {chances_cards} from '../data/cards_details';
function App() {
  
  return (
    <div className='h-screen w-screen flex justify-center p-5'>
      <Gamecard/>
    </div>
  )
}

export default App