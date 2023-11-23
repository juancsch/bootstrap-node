import { expect, describe, test } from 'vitest'

import { greeter } from '../src/index.js'

describe('Greeter Should', () => {

	test('greet to World when name is not passed', () => {

		const actual = greeter()
		expect(actual).toEqual('Hello World!!')
	})

	test.each([
		['Alice', 'Hello Alice!!'],
		['Bob', 'Hello Bob!!']
	])('greet to %s when name is passed', (name, expected) => {

		const actual = greeter(name)
		expect(actual).toEqual(expected)
	})
})
