module.exports = {
	prefix: '',
	important: true,
	separator: ':',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px',
			'3xl': '1600px',
		},
		colors: {
			transparent: 'transparent',

			black: '#000',
			white: '#fff',

			gray: {
				100: '#f7fafc',
				200: '#edf2f7',
				300: '#e2e8f0',
				400: '#cbd5e0',
				500: '#a0aec0',
				600: '#718096',
				700: '#4a5568',
				800: '#2d3748',
				900: '#1a202c',
			},
			red: {
				100: '#fff5f5',
				200: '#fed7d7',
				300: '#feb2b2',
				400: '#fc8181',
				500: '#f56565',
				600: '#e53e3e',
				700: '#c53030',
				800: '#9b2c2c',
				900: '#742a2a',
			},
			orange: {
				100: '#fffaf0',
				200: '#feebc8',
				300: '#fbd38d',
				400: '#f6ad55',
				500: '#ed8936',
				600: '#dd6b20',
				700: '#c05621',
				800: '#9c4221',
				900: '#7b341e',
			},
			yellow: {
				100: '#fffff0',
				200: '#fefcbf',
				300: '#faf089',
				400: '#f6e05e',
				500: '#ecc94b',
				600: '#d69e2e',
				700: '#b7791f',
				800: '#975a16',
				900: '#744210',
			},
			green: {
				100: '#f0fff4',
				200: '#c6f6d5',
				300: '#9ae6b4',
				400: '#68d391',
				500: '#48bb78',
				600: '#38a169',
				700: '#2f855a',
				800: '#276749',
				900: '#22543d',
			},
			teal: {
				100: '#e6fffa',
				200: '#b2f5ea',
				300: '#81e6d9',
				400: '#4fd1c5',
				500: '#38b2ac',
				600: '#319795',
				700: '#2c7a7b',
				800: '#285e61',
				900: '#234e52',
			},
			blue: {
				100: '#ebf8ff',
				200: '#bee3f8',
				300: '#90cdf4',
				400: '#63b3ed',
				500: '#4299e1',
				600: '#3182ce',
				700: '#2b6cb0',
				800: '#2c5282',
				900: '#2a4365',
				tpt: '#3778BB',
			},
			indigo: {
				100: '#ebf4ff',
				200: '#c3dafe',
				300: '#a3bffa',
				400: '#7f9cf5',
				500: '#667eea',
				600: '#5a67d8',
				700: '#4c51bf',
				800: '#434190',
				900: '#3c366b',
			},
			purple: {
				100: '#faf5ff',
				200: '#e9d8fd',
				300: '#d6bcfa',
				400: '#b794f4',
				500: '#9f7aea',
				600: '#805ad5',
				700: '#6b46c1',
				800: '#553c9a',
				900: '#44337a',
			},
			pink: {
				100: '#fff5f7',
				200: '#fed7e2',
				300: '#fbb6ce',
				400: '#f687b3',
				500: '#ed64a6',
				600: '#d53f8c',
				700: '#b83280',
				800: '#97266d',
				900: '#702459',
			},
			lightslategray: {
				50: '#f6f8f8',
				100: '#f1f6f4',
				200: '#dfe7e8',
				300: '#c8d6d6',
				400: '#9ab5b9',
				500: '#728e9c',
				600: '#556a7b',
				700: '#455466',
				800: '#36404d',
				900: '#2d333d',
			},
			steelblue: {
				50: '#f6f8f9',
				100: '#f1f6f5',
				200: '#dee6ec',
				300: '#c6d4de',
				400: '#98b2c8',
				500: '#6f89af',
				600: '#536591',
				700: '#445079',
				800: '#373e5a',
				900: '#2d3748',
			},
			cornflowerblue: {
				50: '#f7f9f9',
				100: '#f3f6f6',
				200: '#e3e4ee',
				300: '#d1cde5',
				400: '#afa5d3',
				500: '#8c7bc0',
				600: '#6b57a4',
				700: '#57448c',
				800: '#453669',
				900: '#342c4f',
			},
			plum: {
				50: '#f8f9f9',
				100: '#f5f6f5',
				200: '#ebe2eb',
				300: '#e0c8e1',
				400: '#ce9bcc',
				500: '#b770b6',
				600: '#934b95',
				700: '#773b7f',
				800: '#5d3062',
				900: '#43274a',
			},
			palevioletred: {
				50: '#f8f9f9',
				100: '#f6f6f3',
				200: '#ede3e5',
				300: '#e3cbd5',
				400: '#d2a1b7',
				500: '#bd7699',
				600: '#995172',
				700: '#7b3f61',
				800: '#5e324e',
				900: '#45293d',
			},
			rosybrown: {
				50: '#f8f9f9',
				100: '#f6f6f3',
				200: '#eee4e4',
				300: '#e4cbd2',
				400: '#d3a2b3',
				500: '#bf7793',
				600: '#9b526c',
				700: '#7c405c',
				800: '#5f334a',
				900: '#46293a',
			},
			lightcoral: {
				50: '#f9f9f8',
				100: '#f6f6f1',
				200: '#f0e4de',
				300: '#e8ccc6',
				400: '#d9a49e',
				500: '#c97a7a',
				600: '#a55453',
				700: '#854247',
				800: '#65343d',
				900: '#4b2a32',
			},
			darksalmon: {
				50: '#f9f9f8',
				100: '#f6f6f0',
				200: '#f1e4da',
				300: '#e9cebd',
				400: '#dba691',
				500: '#cb7d6b',
				600: '#a85745',
				700: '#86443c',
				800: '#653536',
				900: '#4c2b2d',
			},
		},
		spacing: {
			px: '1px',
			0: '0',
			1: '0.25rem',
			2: '0.5rem',
			3: '0.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			8: '2rem',
			10: '2.5rem',
			12: '3rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			32: '8rem',
			40: '10rem',
			48: '12rem',
			56: '14rem',
			64: '16rem',
		},
		backgroundColor: (theme) => theme('colors'),
		backgroundPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
		},
		borderColor: (theme) => ({
			...theme('colors'),
			DEFAULT: theme('colors.gray.300', 'currentColor'),
		}),
		borderRadius: {
			none: '0',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			lg: '0.5rem',
			full: '9999px',
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '0',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		boxShadow: {
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
			none: 'none',
		},
		container: {},
		cursor: {
			auto: 'auto',
			DEFAULT: 'default',
			pointer: 'pointer',
			wait: 'wait',
			text: 'text',
			move: 'move',
			'not-allowed': 'not-allowed',
		},
		fill: {
			current: 'currentColor',
		},
		flex: {
			1: '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none',
		},
		flexGrow: {
			0: '0',
			DEFAULT: '1',
		},
		flexShrink: {
			0: '0',
			DEFAULT: '1',
		},
		fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
		},
		fontWeight: {
			hairline: '100',
			thin: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		},
		height: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			full: '100%',
			screen: '100vh',
		}),
		inset: {
			0: '0',
			auto: 'auto',
		},
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.025em',
			normal: '0',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em',
		},
		lineHeight: {
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
		},
		margin: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			...negative(theme('spacing')),
		}),
		maxHeight: {
			full: '100%',
			screen: '100vh',
		},
		maxWidth: {
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			full: '100%',
		},
		minHeight: {
			0: '0',
			full: '100%',
			screen: '100vh',
		},
		minWidth: {
			0: '0',
			full: '100%',
		},
		objectPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		opacity: {
			0: '0',
			25: '0.25',
			50: '0.5',
			75: '0.75',
			100: '1',
		},
		order: {
			first: '-9999',
			last: '9999',
			none: '0',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
		},
		padding: (theme) => theme('spacing'),
		placeholderColor: (theme) => theme('colors'),
		stroke: {
			current: 'currentColor',
		},
		textColor: (theme) => theme('colors'),
		width: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/7': '14.2857143%',
			'2/7': '28.5714286%',
			'3/7': '42.8571429%',
			'4/7': '57.1428571%',
			'5/7': '71.4285714%',
			'6/7': '85.7142857%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw',
		}),
		zIndex: {
			auto: 'auto',
			0: '0',
			10: '10',
			20: '20',
			30: '30',
			40: '40',
			50: '50',
		},
	},
	variants: {
		accessibility: ['responsive', 'focus'],
		alignContent: ['responsive'],
		alignItems: ['responsive'],
		alignSelf: ['responsive'],
		appearance: ['responsive'],
		backgroundAttachment: ['responsive'],
		backgroundColor: ['responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		borderCollapse: ['responsive'],
		borderColor: ['responsive', 'hover', 'focus'],
		borderRadius: ['responsive', 'first', 'last'],
		borderStyle: ['responsive'],
		borderWidth: ['responsive', 'first', 'last'],
		boxShadow: ['responsive', 'hover', 'focus'],
		cursor: ['responsive'],
		display: ['responsive'],
		fill: ['responsive'],
		flex: ['responsive'],
		flexDirection: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: ['responsive'],
		flexWrap: ['responsive'],
		float: ['responsive'],
		fontFamily: ['responsive'],
		fontSize: ['responsive'],
		fontSmoothing: ['responsive'],
		fontStyle: ['responsive'],
		fontWeight: ['responsive', 'hover', 'focus'],
		height: ['responsive'],
		inset: ['responsive'],
		justifyContent: ['responsive'],
		letterSpacing: ['responsive'],
		lineHeight: ['responsive'],
		listStylePosition: ['responsive'],
		listStyleType: ['responsive'],
		margin: ['responsive', 'first', 'last'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		objectFit: ['responsive'],
		objectPosition: ['responsive'],
		opacity: ['responsive', 'hover', 'focus'],
		order: ['responsive'],
		outline: ['responsive', 'focus'],
		overflow: ['hover', 'responsive'],
		padding: ['responsive', 'first', 'last'],
		placeholderColor: ['responsive', 'focus'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		resize: ['responsive'],
		stroke: ['responsive'],
		tableLayout: ['responsive'],
		textAlign: ['responsive'],
		textColor: ['responsive', 'hover', 'focus'],
		textDecoration: ['responsive', 'hover', 'focus'],
		textOverflow: ['responsive'],
		textTransform: ['responsive'],
		userSelect: ['responsive'],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		width: ['responsive'],
		wordBreak: ['responsive'],
		zIndex: ['responsive'],
	},
	corePlugins: {},
	plugins: [],
	purge: ['./public/*.html', './src/**/*.js'],
};
