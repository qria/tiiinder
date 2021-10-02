import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import TinderCard from 'react-tinder-card';


const db = [
  {
    name: 'Richard Hendricks'
  },
  {
    name: 'Erlich Bachman'
  },
  {
    name: 'Monica Hall'
  },
  {
    name: 'Jared Dunn'
  },
  {
    name: 'Dinesh Chugtai'
  }
]

function App() {
  
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className="App">
      
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      
      <h1>Tiiinder</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
    </div>
  );
}

export default App;
