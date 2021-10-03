import React, { useState } from 'react'
import './App.css';
import TinderCard from 'react-tinder-card';


// more candidates
// dainty - 귀엽고 깜찍하다
// dolor - 고통
// blight - 병충해
// noisome - 악취

// Currently assumes questions are shown in the order in this list.
const words = [
  {
    word: 'jilt',
    answer: 'left',
    commentary: '애인을 가지고 놀다가 차버리는 것을 좋아하',
  },
  {
    word: 'rectitude',
    answer: 'right',
    commentary: '청렴한 것을 싫어하',
  },
  {
    word: 'erudite',
    answer: 'right',
    commentary: '박식한 사람을 싫어하',
  },
  {
    word: 'pundit',
    answer: 'right',
    commentary: '전문가들을 싫어하',
  },
  {
    word: 'libel',
    answer: 'left',
    commentary: '명예훼손을 즐기',
  },
  {
    word: 'cordial',
    answer: 'right',
    commentary: '다정한 것을 싫어하',
  },
  {
    word: 'philistine',
    answer: 'left',
    commentary: '교양없고 속물적인 사람을 좋아하',
  },
  {
    word: 'candor',
    answer: 'right',
    commentary: '정직한 것을 싫어하',
  },
  {
    word: 'upbraid',
    answer: 'left',
    commentary: '남의 잘못을 비난하는 것을 좋아하',
  },
  {
    word: 'progidal',
    answer: 'left',
    commentary: '방탕한 것을 좋아하',
  },
]

function App() {
  
  const [directions, setDirections] = useState([])

  const onCardLeftScreen = (direction) => {
    setDirections(directions => [...directions, direction])
  }
  return (
    <div className="App">
      
      <h1>Tiiinder</h1>
      <div className='cardContainer'>
        
        {words.map((character) =>
          <TinderCard 
            className='swipe' 
            key={character.word} 
            onCardLeftScreen={onCardLeftScreen}
            preventSwipe={['up', 'down']}  
          >
            <div className='card'>
              <h3>{character.word}</h3>
            </div>
          </TinderCard>
        )}
      </div>
    </div>
  );
}

export default App;
