'use strict';

const {add1, mul2} = require('l1');
const sub1 = require('l2');

console.log("client 1");

console.log("add1(sub1(3)) = %d", add1(sub1(3)));
