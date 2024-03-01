import React, { useState } from 'react';

function App() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');

  const handleButtonClick = () => {
    console.log("Attempting script run");
    fetch('/build-script', {
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

  const handleButtonStartClick = () => {
    console.log("Attempting script run");
    fetch('/start-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleButtonStopClick = () => {
    console.log("Attempting script run");
    fetch('/stop-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleButtonDashboardClick = () => {
    console.log("Attempting script run");
    fetch('/dashboard-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleButtonDeleteClick = () => {
    console.log("Attempting script run");
    fetch('/delete-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputThree }),
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
      <button onClick={handleButtonStartClick}>Start</button>
      <button onClick={handleButtonStopClick}>Stop</button>
      <button onClick={handleButtonDashboardClick}>Dashboard</button>
      <input
        type="text"
        value={inputThree}
        onChange={(e) => setInputThree(e.target.value)}
      />
      <button onClick={handleButtonDeleteClick}>Delete Pod</button>
    </div>
  );
}

export default App;