import React, { useState } from 'react';
import './App.css';

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
      <header>
        <h2>Developer Deployment UI</h2>
      </header>
      <div className='buttonLine'>
        <p>Use these to start the minikube environment, stop it, or open the web app dashboard.</p>
        <p>*Note that docker desktop must be open on your local machine.</p>
        <button onClick={handleButtonStartClick}>Start</button>
        <button onClick={handleButtonStopClick}>Stop</button>
        <button onClick={handleButtonDashboardClick}>Dashboard</button>
      </div>
      <div className="buildLine">
        <p>Input a github http clone link for a repository with a dockerfile and yaml file, and then enter what you want the pod to be named. </p>
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
      <div className='deleteLine'>
        <p>Enter the name of a pod to stop and delete from the minikube environment.</p>
        <input
          type="text"
          value={inputThree}
          onChange={(e) => setInputThree(e.target.value)}
        />
        <button onClick={handleButtonDeleteClick}>Delete Pod</button>
      </div>
    </div>
  );
}

export default App;