import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/words';
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'Start' },
  { id: 2, name: 'Game' },
  { id: 3, name: 'End' }
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  console.log(words);

  return (
    <div className="App">
      {gameStage === 'Start' && <StartScreen />}
      {gameStage === 'Game' && <Game />}
      {gameStage === 'End' && <GameOver />}
    </div>
  );
}

export default App;
