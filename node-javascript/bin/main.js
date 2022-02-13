#!/usr/bin/env node

const { greeter } = require('../lib/index')

console.log(
	// eslint-disable-next-line no-magic-numbers
	greeter(process.argv[2])
)
