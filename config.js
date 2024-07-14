const mongoose = require('mongoose');

const url='mongodb+srv://23ce140:cxFGrQJU8OeTCXVG@cluster0.paezpii.mongodb.net/example';

mongoose.connect(url);

console.log('connected');
