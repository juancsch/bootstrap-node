export default {
	testMatch: [
		'<rootDir>/test/**/*.test.js'
	],
	reporters: [
		'default',
		['jest-summary-reporter', { failuresOnly: true }]
	]
}
