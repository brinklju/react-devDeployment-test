const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/run-script', (req, res) => {
  const { inputOne, inputTwo } = req.body;
  console.log(`Attempting to execute script with inputs: ${inputOne}, ${inputTwo}`);
    exec(`sh scripts/build.sh ${inputOne} ${inputTwo}`, (error, stdout, stderr) => {
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
