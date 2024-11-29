export default {
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1'
	},
	extensionsToTreatAsEsm: ['.ts'],
	transform: {
		'^.+\\.ts?$': '@swc/jest'
	},
	testMatch: [
		'<rootDir>/test/**/*.test.ts'
	],
	reporters: [
		'default',
		['jest-summary-reporter', { failuresOnly: true }]
	]
}
