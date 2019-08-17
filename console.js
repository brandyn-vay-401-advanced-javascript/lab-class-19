'use strict';

const theword = require('./theword.js');

const io = require('socket.io-client');

const socket = io.connect('http://socketserver-env.h4y5tx6t6s.us-east-2.elasticbeanstalk.com');

socket.on('the-bird', theword);

