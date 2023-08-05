import React, { useState } from 'react'
import '../styles/App.css';


function App() {
  const [inputText, setInputText] = useState('');
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    // Check if the text exceeds the character limit
    if (text.length > charLimit) {
      setInputText(text.slice(0, charLimit)); // Truncate the text to the character limit
    }
  };

  const handleCharLimitChange = (event) => {
    const limit = parseInt(event.target.value);
    setCharLimit(limit);
    if (inputText.length > limit) {
      setInputText(inputText.slice(0, limit)); // Truncate the text to the new character limit
    }
  };

  const handleFontSizeChange = (event) => {
    const size = parseInt(event.target.value);
    setFontSize(size);
  };

  // Function to calculate word count
  const getWordCount = () => {
    const words = inputText.trim().split(/\s+/).filter(word => word !== '');
    return words.length;
  };

  // Function to calculate character count
  const getCharCount = () => {
    return inputText.length;
  };

  return (
    <div id="main">
      <textarea
        value={inputText}
        onChange={handleInputChange}
        style={{ fontSize: fontSize + 'px' }}
        rows="6"
        cols="50"
      />
      <div>
        <span>Word Count: {getWordCount()}</span>
        <span>Character Count: {getCharCount()}</span>
      </div>
      <label htmlFor="char-limit-input">Character Limit:</label>
      <input
        type="number"
        id="char-limit-input"
        value={charLimit}
        onChange={handleCharLimitChange}
      />
      <br />
      <label htmlFor="fontSize-input">Font Size:</label>
      <input
        type="range"
        id="fontSize-input"
        min="16"
        max="32"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
    </div>
  );
}

export default App;


export default App;
