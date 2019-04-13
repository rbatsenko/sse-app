const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/sse', (req, res) => {
  res.status(200).set({
    'connection': 'keep-alive',
    'cache-control': 'no-cache',
    'content-type': 'text/event-stream',
  });

  setInterval(() => {
    res.write(`data: New event!\n\n`);
  }, 1000);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});