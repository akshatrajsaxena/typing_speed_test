import React, { useState, useEffect } from 'react';
import TypingArea from './TypingArea';
import './SpeedTypingGame.css';

const paragraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "Pack my box with five dozen liquor jugs.",
  "Jinxed wizards pluck ivy from the big quilt.",
  "Crazy Fredrick bought many very exquisite opal jewels."
];

const getRandomParagraph = () => {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)];
};

function SpeedTypingGame() {
  const [paragraph, setParagraph] = useState(getRandomParagraph());
  const [inputValue, setInputValue] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    if (inputValue === paragraph) {
      alert(`Congratulations! You completed the test in ${elapsedTime} seconds with ${mistakes} mistakes.`);
      resetGame();
    }
  }, [inputValue]);

  const handleChange = (e) => {
    if (startTime === null) {
      setStartTime(Date.now());
    }

    const value = e.target.value;
    setInputValue(value);

    const mistakesCount = value.split('').reduce((acc, char, index) => {
      return char !== paragraph[index] ? acc + 1 : acc;
    }, 0);
    setMistakes(mistakesCount);

    if (startTime !== null) {
      setElapsedTime(((Date.now() - startTime) / 1000).toFixed(2));
    }
  };

  const resetGame = () => {
    setParagraph(getRandomParagraph());
    setInputValue('');
    setStartTime(null);
    setElapsedTime(0);
    setMistakes(0);
  };

  return (
    <div className="speed-typing-game">
      <h1>Speed Typing Game</h1>
      <p className="paragraph-to-type">{paragraph}</p>
      <TypingArea 
        inputValue={inputValue} 
        handleChange={handleChange} 
        elapsedTime={elapsedTime} 
        mistakes={mistakes} 
        resetGame={resetGame} 
      />
    </div>
  );
}

export default SpeedTypingGame;
