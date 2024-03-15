const express = require('express');
const { exec, execSync } = require('child_process');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/build-script', (req, res) => {
  const { inputOne, inputTwo } = req.body;
  console.log(`Attempting to execute script with inputs: ${inputOne}, ${inputTwo}`);
    execSync(`build.sh ${inputOne} ${inputTwo}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Execution error: ${error}`);
        return res.status(500).send(stderr);
    }
    console.log(`Script output: ${stdout}`);
    res.send(stdout);
    });
    exec(`clean.sh`, (error, stdout, stderr) => {
      if (error) {
          console.error(`Execution error: ${error}`);
          return res.status(500).send(stderr);
      }
      console.log(`Script output: ${stdout}`);
      res.send(stdout);
      });
});

app.post('/delete-script', (req, res) => {
  const { inputThree } = req.body;
  console.log(`Attempting to execute script to remove pod with this name: ${inputThree}`);
    exec(`deletePod.sh ${inputThree}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Execution error: ${error}`);
        return res.status(500).send(stderr);
    }
    console.log(`Script output: ${stdout}`);
    res.send(stdout);
    });
});

app.post('/start-script', (req, res) => {
  console.log(`Attempting to execute script to start minikube`);
    exec(`start.sh`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Execution error: ${error}`);
        return res.status(500).send(stderr);
    }
    console.log(`Script output: ${stdout}`);
    res.send(stdout);
    });
});

app.post('/stop-script', (req, res) => {
  console.log(`Attempting to execute script to stop minikube`);
    exec(`stop.sh`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Execution error: ${error}`);
        return res.status(500).send(stderr);
    }
    console.log(`Script output: ${stdout}`);
    res.send(stdout);
    });
});

app.post('/dashboard-script', (req, res) => {
  console.log(`Attempting to execute script to start minikube`);
    exec(`dashboard.sh`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Execution error: ${error}`);
        return res.status(500).send(stderr);
    }
    console.log(`Script output: ${stdout}`);
    res.send(stdout);
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
