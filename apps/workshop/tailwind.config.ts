import {config as EloquentPreset} from "../../packages/tokens/src/tailwind.config-preset"
import type { Config }                                                                                         from "tailwindcss";

module.exports = {
	darkMode: [ "class" ],
	content:  [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme:    {
		container: {
			center:  true,
			padding: "2rem",
		},
		extend: {
			spacing: {
				"inline-1": "4px",
				"inline-2": "8px",
				"inline-4": "16px",
				"inline-6": "24px",
				"inline-8": "32px",
				"inline-10": "40px",
				"inline-12": "48px",
				"inline-16": "64px",
				"inline-20": "80px",
				"stack-1": "4px",
				"stack-2": "8px",
				"stack-4": "16px",
				"stack-6": "24px",
				"stack-8": "32px",
				"stack-10": "40px",
				"stack-12": "48px",
				"stack-14": "56px",
				"stack-16": "64px",
				"stack-20": "80px",
				"stack-30": "120px",
				"stack-40": "160px",
				"stack-50": "200px",
			} ,
			screens: {
				"tablet":"600px",
				"laptop":"960px",
				"desktop": "1272px",
				"full":    "1680px",
			},
			letterSpacing:            {
				small:  "-1px",
				medium: "-2px",
				large:  "-3px",
			},
			lineHeight:               {
				default:      "100%",
				tiny:         "115%",
				medium:       "120%",
				large:        "133%",
				distant:      "150%",
				superdistant: "170%",
			},
			transitionTimingFunction: {
				DEFAULT: "cubic-bezier(0.48, 0, 0.48, 1)",
			},
			transitionDuration:       {
				DEFAULT: "0.275s",
			},
			borderRadius:             {
				none:   "0px",
				pill:   "500px",
				circle: "50%",
				lg:     "var(--radius)",
				md:     "calc(var(--radius) - 2px)",
				sm:     "calc(var(--radius) - 4px)",
			},
			opacity:                  {
				0:               "0",
				1:               "1",
				semiopaque:      "0.8",
				intense:         "0.64",
				medium:          "0.32",
				light:           "0.16",
				semitransparent: "0.08",
			},
			boxShadow:                {
				"level-1": "0 4px 8px rgba(69, 73, 84, 0.08)",
				"level-2": "0 8px 24px rgba(69, 73, 84, 0.08)",
				"level-3": "0 16px 32px rgba(69, 73, 84, 0.08)",
				"level-4": "0 16px 48px rgba(69, 73, 84, 0.08)",
			},
			keyframes:                {
				"load-pulse-first":  {
					"0%":  { "box-shadow": "9999px 0 0 -1px" },
					"30%": { "box-shadow": "9999px 0 0 2px" },
					"60%": { "box-shadow": "9999px 0 0 -1px" },
				},
				"load-pulse-second": {
					"0%":  { "box-shadow": "9984px 0 0 -1px" },
					"30%": { "box-shadow": "9984px 0 0 2px" },
					"60%": { "box-shadow": "9984px 0 0 -1px" },
				},
				"load-pulse-third":  {
					"0%":  { "box-shadow": "10014px 0 0 -1px" },
					"30%": { "box-shadow": "10014px 0 0 2px" },
					"60%": { "box-shadow": "10014px 0 0 -1px" },
				},
				hide:                {
					from: { opacity: "1" },
					to:   { opacity: "0" },
				},
				slideIn:             {
					from: {
						transform: "translateX(calc(100% + var(--viewport-padding)))",
					},
					to:   { transform: "translateX(0)" },
				},
				swipeOut:            {
					from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
					to:   {
						transform: "translateX(calc(100% + var(--viewport-padding)))",
					},
				},
				"accordion-down":    {
					from: { height: "0" },
					to:   { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up":      {
					from: { height: "var(--radix-accordion-content-height)" },
					to:   { height: "0" },
				},
			},
			animation:                {
				"load-pulse-first":  "load-pulse-first 1.5s infinite 0.25s",
				"load-pulse-second": "load-pulse-second 1.5s infinite 0s",
				"load-pulse-third":  "load-pulse-third 1.5s infinite 0.5s",
				hide:                "hide 100ms ease-in",
				slideIn:             "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				swipeOut:            "swipeOut 100ms ease-out",
				"accordion-down":    "accordion-down 0.2s ease-out",
				"accordion-up":      "accordion-up 0.2s ease-out",
			},
			aspectRatio:              {
				"4/3": "4 / 3",
			},
		}
	},
	plugins:  [ require( "tailwindcss-animate" ) ],
	preset:   [EloquentPreset],
} satisfies Config;
