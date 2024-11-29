#!/usr/bin/env node

const { greeter } = require('../src/index')

console.log(
	greeter(process.argv[2])
)
