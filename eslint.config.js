import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import stylisticPlugin from "@stylistic/eslint-plugin";
import vueParser from "vue-eslint-parser";

export default [
	{
		ignores: ["node_modules/", "dist/", "build/", ".git/"]
	},
	{
		files: ["**/*.{js,mjs,cjs}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				console: "readonly",
				window: "readonly",
				document: "readonly"
			}
		},
		plugins: {
			"@stylistic": stylisticPlugin
		},
		rules: {
			...js.configs.recommended.rules,

			// Stylistic rules
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/quotes": ["error", "double"],
			"@stylistic/semi": ["error", "always"],
			"@stylistic/comma-dangle": ["error", "never"],
			"@stylistic/no-trailing-spaces": "error",

			// Best practices
			"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"prefer-const": "error",
			"no-debugger": "error"
		}
	},
	{
		files: ["**/*.vue"],
		languageOptions: {
			parser: vueParser,
			ecmaVersion: "latest",
			sourceType: "module"
		},
		plugins: {
			vue: pluginVue,
			"@stylistic": stylisticPlugin
		},
		rules: {
			...pluginVue.configs["vue3-recommended"].rules,

			// Vue rules customization
			"vue/multi-word-component-names": "off",
			"vue/singleline-html-element-content-newline": "off",
			"vue/no-v-html": "warn",
			"vue/require-default-props": "off"
			// Note: Let Prettier handle indentation and formatting for Vue files
		}
	}
];
