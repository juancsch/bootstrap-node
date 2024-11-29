import assert from 'node:assert'
import { describe, test } from 'node:test'

import { greeter } from '../src/index.js'

void describe('Greeter Should', () => {

	void test('greet to World when name is not passed', () => {

		const actual = greeter()
		assert(actual, 'Hello World!!')
	})

	const parametrized = [
		['Alice', 'Hello Alice!!'],
		['Bob', 'Hello Bob!!']
	]
	parametrized.forEach(([name, expected]) => {
		void test('greet to %s when name is passed', () => {

			const actual = greeter(name)
			assert(actual, expected)
		})
	})
})
