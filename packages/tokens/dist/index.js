"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var tokens_exports = {};
__export(tokens_exports, {
  COLORS: () => COLORS,
  FONT_FAMILY: () => FONT_FAMILY,
  FONT_SIZE: () => FONT_SIZE,
  FONT_WEIGHT: () => FONT_WEIGHT,
  SPACING: () => SPACING,
  eloquentPreset: () => config
});
module.exports = __toCommonJS(tokens_exports);

// spacing.ts
var SPACING = {
  "inline-quark": "4px",
  "inline-nano": "8px",
  "inline-xxxs": "16px",
  "inline-xxs": "24px",
  "inline-xs": "32px",
  "inline-sm": "40px",
  "inline-md": "48px",
  "inline-lg": "64px",
  "inline-xl": "80px",
  "inset-quark": "4px",
  "inset-nano": "8px",
  "inset-xs": "16px",
  "inset-sm": "24px",
  "inset-md": "32px",
  "inset-lg": "40px",
  "size-quark": "4px",
  "size-nano": "8px",
  "size-xxxs": "16px",
  "size-xxs": "24px",
  "size-xs": "32px",
  "size-sm": "40px",
  "size-md": "48px",
  "size-lg": "56px",
  "size-xl": "64px",
  "size-xxl": "80px",
  "size-xxxl": "120px",
  "size-huge": "160px",
  "size-giant": "200px",
  "squish-quark": "4px",
  "squish-nano": "8px 16",
  "squish-xs": "16px 24p",
  "squish-sm": "16px 32p",
  "stack-quark": "4px",
  "stack-nano": "8px",
  "stack-xxxs": "16px",
  "stack-xxs": "24px",
  "stack-xs": "32px",
  "stack-sm": "40px",
  "stack-md": "48px",
  "stack-lg": "56px",
  "stack-xl": "64px",
  "stack-xxl": "80px",
  "stack-xxxl": "120px",
  "stack-huge": "160px",
  "stack-giant": "200px"
};

// colors.ts
var COLORS = {
  transparent: "transparent",
  base: {
    dark: {
      pure: "#000000",
      "01": "#616161",
      "02": "#474747",
      "03": "#333333"
    },
    light: {
      pure: "#ffffff",
      "01": "#f0f0f0",
      "02": "#e0e0e0",
      "03": "#bdbdbd"
    }
  },
  feedback: {
    positive: {
      pure: "#18dc8e",
      "01": "#bafde2",
      "02": "#66f5bc",
      "03": "#14b273"
    },
    negative: {
      pure: "#fb1964",
      "01": "#fcbac8",
      "02": "#fc6988",
      "03": "#aa0327"
    },
    informative: {
      pure: "#0057ff",
      "01": "#ccddff",
      "02": "#669aff",
      "03": "#003499"
    }
  },
  brand: {
    primary: {
      pure: "#ec3413",
      "01": "#f9cec7",
      "02": "#f07f6b",
      "03": "#991700"
    },
    secondary: {
      pure: "#ffcc00",
      "01": "#fff3c2",
      "02": "#ffdf61",
      "03": "#c29b00"
    },
    tertiary: {
      pure: "#00a0de",
      "01": "#ade4fa",
      "02": "#55c8f6",
      "03": "#0075a3"
    },
    test: {
      pure: "#123412"
    }
  }
};

// font.ts
var FONT_WEIGHT = {
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800"
};
var FONT_FAMILY = {
  sans: "Inter, sans-serif"
};
var FONT_SIZE = {
  xxxs: "12px",
  xxs: "14px",
  xs: "16px",
  sm: "20px",
  md: "24px",
  lg: "32px",
  xl: "40px",
  xxl: "48px",
  xxxl: "56px",
  display: "64px",
  giant: "80px"
};

// tailwind.config-preset.ts
var config = {
  content: [
    "node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: COLORS,
      fontSize: FONT_SIZE,
      fontFamily: FONT_FAMILY,
      fontWeight: FONT_WEIGHT,
      spacing: SPACING
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
  eloquentPreset
});
//# sourceMappingURL=index.js.map