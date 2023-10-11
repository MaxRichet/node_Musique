const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/node_music');

app.use(express.urlencoded());
app.use(express.json());

const musicRoute = require(`./routes/musicRoute`);
app.use('/musics', musicRoute);

const voteRoute = require(`./routes/voteRoute`);
app.use('/', voteRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});