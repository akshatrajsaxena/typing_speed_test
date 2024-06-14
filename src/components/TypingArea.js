import React from 'react';

function TypingArea({ inputValue, handleChange, elapsedTime, mistakes, resetGame }) {
  return (
    <div className="typing-area">
      <textarea
        value={inputValue}
        onChange={handleChange}
        placeholder="Start typing here..."
        rows="6"
        cols="50"
      />
      <div className="stats">
        <p>Time: {elapsedTime} seconds</p>
        <p>Mistakes: {mistakes}</p>
      </div>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default TypingArea;
