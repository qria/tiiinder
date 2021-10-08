import React, { useEffect, useState } from 'react'
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
  const [guideShown, setGuideShown] = useState(false)
  const endShown = directions.length === words.length

  useEffect(() => setTimeout(() => setGuideShown(true), 50), [])

  const onCardLeftScreen = (direction) => {
    setDirections(directions => [...directions, direction])
  }
  return (
    <div className="App">

      <h1>Tiiinder</h1>
      <div className='cardContainer'>

        {words.map((word) =>
          <TinderCard
            className='swipe'
            key={word.word}
            onCardLeftScreen={onCardLeftScreen}
            preventSwipe={['up', 'down']}
          >
            <div className='card'>
              <h3>{word.word}</h3>
            </div>
          </TinderCard>
        )}
      </div>

      <div className={"modal" + (guideShown ? " show" : "")}>

        <div className="modal-content">
          <div className="modal-header">
            <h2>Tiiinder</h2>
          </div>
          <div className="modal-body">
            <p>주어진 영어단어에</p>
            <p>좋으면 오른쪽, 안좋으면 왼쪽으로 스와이프하세요</p>
          </div>
          <div className="modal-footer">
            <h3 onClick={() => setGuideShown(false)}>Start</h3>
          </div>
        </div>
      </div>

      <div className={"modal" + (endShown ? " show" : "")}>

        <div className="modal-content">
          <div className="modal-header">
            <h2>결과</h2>
          </div>
          <div className="modal-body">

            <p>당신은...</p>
            {[...Array(words.length).keys()].map((i) =>{
              const word = words[i];
              const direction = directions[i];
              if (direction !== word.answer){
                return (<p key={i}>{word.word} {direction} {word.commentary}고</p>);
              }
              }
            )}
            <p>하는 사람이군요...</p>
          </div>
          <div className="modal-footer">
            <h3>다시하기</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
