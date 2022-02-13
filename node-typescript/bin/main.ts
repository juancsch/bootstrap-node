#!/usr/bin/env ts-node

import { greeter } from '../src/index'

console.log(
	greeter(process.argv[2])
)
