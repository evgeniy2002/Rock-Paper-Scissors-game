import React from 'react';
import { Header } from './components/Header';
import { Paper } from './components/Paper';
import { Rock } from './components/Rock';
import { Scissors } from './components/Scissors';

import './scss/App.scss';

import { Context } from './context';
import { RulesBtn } from './components/RulesBtn';
import { RulesPopup } from './components/RulesPopup';

import bg_game from './images/bg-triangle.svg';
import classNames from 'classnames';

const chips = ['rock', 'paper', 'scissors'];

const switchChip = (val) => {
  switch (val) {
    case 'paper':
      return <Paper />;
    case 'rock':
      return <Rock />;
    case 'scissors':
      return <Scissors />;

    default:
      break;
  }
};

function App() {
  const [popup, setPopup] = React.useState(false);
  const [chooseChip, setChooseChip] = React.useState('');
  const [AIChip, setAIChip] = React.useState('');
  const [playAgain, setPlayAgain] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [result, setResult] = React.useState('');

  React.useEffect(() => {
    setResult(gameTotal(chooseChip, AIChip));
  }, [chooseChip, AIChip]);

  React.useEffect(() => {
    if (result === 'you win') {
      setScore((prev) => prev + 1);
    }
  }, [result]);
  const selectedChip = (val) => {
    setChooseChip(val);
    setAIChip(chips[Math.floor(Math.random() * chips.length)]);
    setPlayAgain(true);
  };
  const handlePlayAgain = () => {
    setPlayAgain(false);
    setResult('');
    setChooseChip('');
    setAIChip('');
  };
  const gameTotal = (userChip, aiChip) => {
    if (!userChip && !aiChip) return;
    if (
      (userChip === 'rock' && aiChip === 'scissors') ||
      (userChip === 'paper' && aiChip === 'rock') ||
      (userChip === 'scissors' && aiChip === 'paper')
    ) {
      return 'you win';
    } else if (userChip === aiChip) {
      return 'draw';
    } else {
      return 'you lose';
    }
  };

  return (
    <Context.Provider
      value={{ selectedChip, setPopup, popup, chooseChip, AIChip, score, gameTotal }}>
      <main
        className={classNames('wrapper', {
          active: result !== undefined,
        })}>
        <div className="container">
          <Header />
          <div className="game">
            {playAgain ? (
              <div className="game-finish">
                <div className="game-player">
                  <h2>You Picked</h2>
                  <div
                    className={classNames('user', {
                      winner: gameTotal(chooseChip, AIChip) === 'you win',
                    })}>
                    {switchChip(chooseChip)}
                  </div>
                </div>
                <div className="game-result">
                  <h2>{gameTotal(chooseChip, AIChip)}</h2>
                  <button onClick={handlePlayAgain}>Play again</button>
                </div>
                <div className="game-player">
                  <h2>The house Picked</h2>
                  <div
                    className={classNames('ai', {
                      winner: gameTotal(chooseChip, AIChip) === 'you lose',
                    })}>
                    {switchChip(AIChip)}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="game-field">
                  <Paper />
                  <Scissors />
                </div>
                <div className="game-rock">
                  <Rock />
                </div>
                <div className="game-bg">
                  <img src={bg_game} alt="" />
                </div>
              </>
            )}
          </div>
        </div>
        <RulesPopup />
        <RulesBtn />
      </main>
    </Context.Provider>
  );
}

export default App;
