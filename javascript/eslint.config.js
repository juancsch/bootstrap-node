import globals from 'globals'
import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
	{ files: ['**/*.ts'] },
	eslint.configs.recommended,
	stylistic.configs.customize({
		semi: false,
		indent: 'tab',
		quotes: 'single',
		commaDangle: 'never',
		braceStyle: '1tbs'
	}), {
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.jest
			}
		},
		rules: {
			'@stylistic/padded-blocks': 'off',
			'@stylistic/space-before-function-paren': ['error', 'always']
		}
	}
]
