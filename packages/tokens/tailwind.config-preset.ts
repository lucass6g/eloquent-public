import {FONT_SIZE, FONT_FAMILY, FONT_WEIGHT, COLORS, SPACING} from "./"

export const config = {
    content: [
        "node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: COLORS,
            fontSize: FONT_SIZE,
            fontFamily: FONT_FAMILY,
            fontWeight: FONT_WEIGHT,
            spacing: SPACING,
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
        }
    },
}
