// create a express server
// express is a node package that make it possible for us to create server  very easy and powerful
// npm install express

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import data from './data.js';
import userRouter from './routers/userRouter.js';

dotenv.config();
//create an app
const app = express();

// parsing json data into body of request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//connect to the mongo db database
mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost/amazon_advanced',
  {
    useNewUrlParser: true, // use to get rid of deprecated warnings
    useUnifiedTopology: true, //
    // useCreateIndex: true,
  }
);

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.use('/api/users', userRouter);
//create an handler
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
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
