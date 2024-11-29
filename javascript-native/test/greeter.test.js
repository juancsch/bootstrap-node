import assert from 'node:assert'
import { describe, it } from 'node:test'

import { greeter } from '../src/index.js'

describe('Greeter Should', () => {

	it('greet to World when name is not passed', () => {

		const actual = greeter()
		assert(actual, 'Hello World!!')
	})

	const parametrized = [
		['Alice', 'Hello Alice!!'],
		['Bob', 'Hello Bob!!']
	]
	parametrized.forEach(([name, expected]) => {
		it('greet to %s when name is passed', () => {

			const actual = greeter(name)
			assert(actual, expected)
		})
	})
})
