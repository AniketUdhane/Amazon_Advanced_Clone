// create a express server
// express is a node package that make it possible for us to create server  very easy and powerful
// npm install express

import express from 'express';
import data from './data.js';
//create an app
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
//create an handler
app.get('/', (req, res) => {
  res.send('Server is ready');
});

// to make our server running call a lesson method to app
// for lesson define port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

// to open it in the terminal type  - node backend/server.js

// nodemon is package which automatically rerun the app when there is change in code
// type - npm install --save-dev nodemon
