const express = require('express');
const app = express();
const port = 6000;

const mongoose = require('mongoose');
mongoose
  .connect('mongodb+srv://HJ97Kim:gudwls5537@boilerplate.ppe3e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB 연결성공!'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
