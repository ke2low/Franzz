const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// utils
const { info, errm } = require('./utils/logger');
const { MONGODB_URL } = require('./utils/config');
const {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} = require('./utils/middleware');

// initializing the server application
const app = express();
const server = http.Server(app);

// socketio connect with server
const io = socketio(server);

// routes
const authRouter = require('./routes/auth');
const channelRouter = require('./routes/channel');
const photoRouter = require('./routes/photos');

// connecting to mongodb
info('Connecting to MongoDB');

mongoose
  .connect(
    MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  )
  .then(() => info('Connected to MongoDB'))
  .catch((err) => errm(err));

app.use(cors({
  origin: true,
}));
app.use(cookieParser());

// URL-encoded content (from the form)
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// this is for JSON data
app.use(bodyParser.json());

// this comes after the body is parsed
// the request with relevant data is logged
app.use(requestLogger);

// use routes
app.use('/api/auth', authRouter);
app.use('/api/channel', channelRouter);
app.use('/api/photos', photoRouter);

// sockets channel namespace
require('./socketsio/channel')(io);


// error handling
// this is after all the routes are passed and none are found
app.use(unknownEndpoint);
// prints the error, will handle the type later //:TODO
app.use(errorHandler);

module.exports = server;
