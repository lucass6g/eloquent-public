import { COLORS, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, SPACING } from '@eloquent/tokens';

const plugin = require( 'tailwindcss/plugin' )

module.exports = plugin( function() {

	},
	{
	  theme: {
		  extend: {
			  margin: SPACING,
			  padding: SPACING,
			  spacing: SPACING,
			  gap:  SPACING,
			  screens: {
				  xsm: "500px",
				  sm: "640px",
				  md: "768px",
				  lg: "1024px",

				  mobile: {
					  min: "0",
					  max: "599px",
				  },
				  tablet: {
					  min: "600px",
					  max: "959px",
				  },
				  laptop: {
					  min: "960px",
					  max: "1271px",
				  },
				  desktop: {
					  min: "1272px",
					  max: "1769px",
				  },
				  full: "1680px",
				  print: { raw: "print" },
			  },
			  fontSize: FONT_SIZE,
			  fontWeight: FONT_WEIGHT,
			  fontFamily: FONT_FAMILY,
			  letterSpacing: {
				  small: "-1px",
				  medium: "-2px",
				  large: "-3px",
			  },
			  lineHeight: {
				  default: "100%",
				  tiny: "115%",
				  medium: "120%",
				  large: "133%",
				  distant: "150%",
				  superdistant: "170%",
			  },
			  borderWidth: {
				  none: "0px",
				  hairline: "1px",
				  thin: "2px",
				  thick: "4px",
				  heavy: "8px",
			  },
			  transitionDelay: {
				  DEFAULT: "",
			  },
			  transitionTimingFunction: {
				  DEFAULT: "cubic-bezier(0.48, 0, 0.48, 1)",
			  },
			  transitionDuration: {
				  DEFAULT: "0.275s",
			  },
			  borderRadius: {
				  none: "0px",
				  pill: "500px",
				  circle: "50%",
				  lg: "var(--radius)",
				  md: "calc(var(--radius) - 2px)",
				  sm: "calc(var(--radius) - 4px)",
			  },
			  opacity: {
				  0: "0",
				  1: "1",
				  semiopaque: "0.8",
				  intense: "0.64",
				  medium: "0.32",
				  light: "0.16",
				  semitransparent: "0.08",
			  },
			  boxShadow: {
				  "level-1": "0 4px 8px rgba(69, 73, 84, 0.08)",
				  "level-2": "0 8px 24px rgba(69, 73, 84, 0.08)",
				  "level-3": "0 16px 32px rgba(69, 73, 84, 0.08)",
				  "level-4": "0 16px 48px rgba(69, 73, 84, 0.08)",
			  },
			  colors: COLORS,
			  keyframes: {
				  "load-pulse-first": {
					  "0%": { "box-shadow": "9999px 0 0 -1px" },
					  "30%": { "box-shadow": "9999px 0 0 2px" },
					  "60%": { "box-shadow": "9999px 0 0 -1px" },
				  },
				  "load-pulse-second": {
					  "0%": { "box-shadow": "9984px 0 0 -1px" },
					  "30%": { "box-shadow": "9984px 0 0 2px" },
					  "60%": { "box-shadow": "9984px 0 0 -1px" },
				  },
				  "load-pulse-third": {
					  "0%": { "box-shadow": "10014px 0 0 -1px" },
					  "30%": { "box-shadow": "10014px 0 0 2px" },
					  "60%": { "box-shadow": "10014px 0 0 -1px" },
				  },
				  hide: {
					  from: { opacity: "1" },
					  to: { opacity: "0" },
				  },
				  slideIn: {
					  from: {
						  transform: "translateX(calc(100% + var(--viewport-padding)))",
					  },
					  to: { transform: "translateX(0)" },
				  },
				  swipeOut: {
					  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
					  to: {
						  transform: "translateX(calc(100% + var(--viewport-padding)))",
					  },
				  },
				  "accordion-down": {
					  from: { height: "0" },
					  to: { height: "var(--radix-accordion-content-height)" },
				  },
				  "accordion-up": {
					  from: { height: "var(--radix-accordion-content-height)" },
					  to: { height: "0" },
				  },
			  },
			  animation: {
				  "load-pulse-first": "load-pulse-first 1.5s infinite 0.25s",
				  "load-pulse-second": "load-pulse-second 1.5s infinite 0s",
				  "load-pulse-third": "load-pulse-third 1.5s infinite 0.5s",
				  hide: "hide 100ms ease-in",
				  slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				  swipeOut: "swipeOut 100ms ease-out",
				  "accordion-down": "accordion-down 0.2s ease-out",
				  "accordion-up": "accordion-up 0.2s ease-out",
			  },
			  aspectRatio: {
				  "4/3": "4 / 3",
			  },
		  },
	  }
	}
	)