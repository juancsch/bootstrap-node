import { greeter } from '../src/index'

describe('Greeter', () => {

	test('should greet to World', () => {

		const actual = greeter()
		expect(actual).toEqual('Hello World!!')
	})

	test.each([
		['Alice', 'Hello Alice!!'],
		['Bob', 'Hello Bob!!']
	])('should greet to %s', (name, expected) => {

		const actual = greeter(name)
		expect(actual).toEqual(expected)
	})
})
