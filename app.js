'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://socketserver-env.h4y5tx6t6s.us-east-2.elasticbeanstalk.com');

const faker = require('faker');

setInterval( () => {
  socket.emit('speak', faker.hacker.phrase());
},1000);
