import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		global: true,
		include: ['test/**/*.test.ts'],
		reporters: ['verbose']
	}
})
