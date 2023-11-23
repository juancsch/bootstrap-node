const { greeter } = require('../src/index')

describe('Greeter Should', () => {

	it('greet to World when name is not passed', () => {

		const actual = greeter()
		expect(actual).toEqual('Hello World!!')
	})

	it.each([
		['Alice', 'Hello Alice!!'],
		['Bob', 'Hello Bob!!']
	])('greet to %s when name is passed', (name, expected) => {

		const actual = greeter(name)
		expect(actual).toEqual(expected)
	})
})
