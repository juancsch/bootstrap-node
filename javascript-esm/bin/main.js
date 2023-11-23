#!/usr/bin/env node

import { greeter } from '../src/index.js'

console.log(
	// eslint-disable-next-line no-magic-numbers
	greeter(process.argv[2])
)
