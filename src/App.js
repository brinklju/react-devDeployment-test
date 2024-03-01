import React, { useState } from 'react';

function App() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  const handleButtonClick = () => {
    console.log("Attempting script run");
    fetch('/run-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputOne, inputTwo }),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputOne}
        onChange={(e) => setInputOne(e.target.value)}
      />
      <input
        type="text"
        value={inputTwo}
        onChange={(e) => setInputTwo(e.target.value)}
      />
      <button onClick={handleButtonClick}>Build</button>
    </div>
  );
}

export default App;