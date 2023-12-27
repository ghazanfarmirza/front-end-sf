const { colors } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/containers/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/stories/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			...colors,
			green: '#9abf14',
			blue: '#47597e',
			black: '#10292d',
			orange: '#faa40f',
			grey: '#c1c1c1',
			white: '#ffffff',
			'dark-green': '#748f0f',
			'dark-blue': '#00424b',
			'light-white': '#fbf7ef',
			'light-green': '#ebf5eb',
			'light-blue': '#e7f2f3',
			brand: 'rgba(16, 41, 45, 0.5)',
			'light-grey': '#a5a5a5',
		},
		fontSize: {
			sm: [
				'0.875rem',
				{
					lineHeight: '1.5rem',
				},
			],
			base: [
				'1rem',
				{
					lineHeight: '1.75rem',
				},
			],
			lg: [
				'1.25rem',
				{
					lineHeight: '1.75rem',
				},
			],
			xl: [
				'1.5rem',
				{
					lineHeight: '2rem',
				},
			],
			'2xl': [
				'2rem',
				{
					lineHeight: '2.75rem',
				},
			],
			'3xl': [
				'2.5rem',
				{
					lineHeight: '3rem',
				},
			],
			'4xl': [
				'3rem',
				{
					lineHeight: '3.75rem',
				},
			],
			'5xl': [
				'3.5rem',
				{
					lineHeight: '4rem',
				},
			],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '1rem',
				lg: '1.6rem',
				xl: '1rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		extend: {},
	},
	plugins: [],
};
