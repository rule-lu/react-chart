import React from 'react'
import { theme } from '@chakra-ui/core'

// { sm: string; md: string; lg: string; xl: string }
const breakpoints = []
breakpoints.sm = '0px'
breakpoints.md = '768px'
breakpoints.lg = '1024px'
breakpoints.xl = '1440px'

const customFonts = {
	body: 'sans-serif, Noto Sans TC',
	heading: 'sans-serif, Noto Sans TC',
	mono: 'Menlo, monospace, Noto Sans TC',
}

const customIcons = {
	burger: {
		path: <path fill="currentColor" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />,
		viewBox: '0 0 20 20',
	},
	logout: {
		path: (
			<path
				fill="currentColor"
				d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
			/>
		),
		viewBox: '0 0 512 512',
	},
}

const customColor = {
	brand: {
		50: '#9BD4A6',
		100: '#9BD4A6',
		200: '#9BD4A6',
		300: '#8DCE9A',
		400: '#7EC88D',
		500: '#68BF79',
		600: '#62BC74',
		700: '#54B667',
		800: '#49AB5D',
		900: '#439D55',
	},
	gray: {
		50: '#ededed',
		100: '#e1e1e1',
		200: '#d3d3d3',
		300: '#c4c4c4',
		400: '#b3b3b3',
		500: '#a0a0a0',
		600: '#898989',
		700: '#6c6c6c',
		800: '#333333',
		900: '#2f2f2f',
	},
}

const customBgColor = {
	light: {
		background: '#eeeeee',
	},
	dark: {
		background: '#000000',
	},
}

// Custom Setting
export const customTheme = {
	...theme,
	breakpoints,
	backgroundColor: {
		...theme.backgroundColor,
		...customBgColor,
	},
	fonts: {
		...customFonts,
	},
	colors: {
		...theme.colors,
		...customColor,
	},
	icons: {
		...theme.icons,
		...customIcons,
	},
}
