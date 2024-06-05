declare const SPACING: {
    "inline-quark": string;
    "inline-nano": string;
    "inline-xxxs": string;
    "inline-xxs": string;
    "inline-xs": string;
    "inline-sm": string;
    "inline-md": string;
    "inline-lg": string;
    "inline-xl": string;
    "inset-quark": string;
    "inset-nano": string;
    "inset-xs": string;
    "inset-sm": string;
    "inset-md": string;
    "inset-lg": string;
    "size-quark": string;
    "size-nano": string;
    "size-xxxs": string;
    "size-xxs": string;
    "size-xs": string;
    "size-sm": string;
    "size-md": string;
    "size-lg": string;
    "size-xl": string;
    "size-xxl": string;
    "size-xxxl": string;
    "size-huge": string;
    "size-giant": string;
    "squish-quark": string;
    "squish-nano": string;
    "squish-xs": string;
    "squish-sm": string;
    "stack-quark": string;
    "stack-nano": string;
    "stack-xxxs": string;
    "stack-xxs": string;
    "stack-xs": string;
    "stack-sm": string;
    "stack-md": string;
    "stack-lg": string;
    "stack-xl": string;
    "stack-xxl": string;
    "stack-xxxl": string;
    "stack-huge": string;
    "stack-giant": string;
};

declare const COLORS: {
    transparent: string;
    base: {
        dark: {
            pure: string;
            "01": string;
            "02": string;
            "03": string;
        };
        light: {
            pure: string;
            "01": string;
            "02": string;
            "03": string;
        };
    };
    feedback: {
        positive: {
            pure: string;
            "01": string;
            "02": string;
            "03": string;
        };
        negative: {
            pure: string;
            "01": string;
            "02": string;
            "03": string;
        };
        informative: {
            pure: string;
            "01": string;
            "02": string;
            "03": string;
        };
    };
    brand: {
        primary: {
            pure: string;
            "01": string;
            "02": string;
            "03": string;
        };
        secondary: {
            pure: string;
            "01": string;
            "02": string;
            "03": string;
        };
        tertiary: {
            pure: string;
            "01": string;
            "02": string;
            "03": string;
        };
        test: {
            pure: string;
        };
    };
};

declare const FONT_WEIGHT: {
    light: string;
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
};
declare const FONT_FAMILY: {
    sans: string;
};
declare const FONT_SIZE: {
    xxxs: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    display: string;
    giant: string;
};

declare const config: {
    content: string[];
    theme: {
        extend: {
            colors: {
                transparent: string;
                base: {
                    dark: {
                        pure: string;
                        "01": string;
                        "02": string;
                        "03": string;
                    };
                    light: {
                        pure: string;
                        "01": string;
                        "02": string;
                        "03": string;
                    };
                };
                feedback: {
                    positive: {
                        pure: string;
                        "01": string;
                        "02": string;
                        "03": string;
                    };
                    negative: {
                        pure: string;
                        "01": string;
                        "02": string;
                        "03": string;
                    };
                    informative: {
                        pure: string;
                        "01": string;
                        "02": string;
                        "03": string;
                    };
                };
                brand: {
                    primary: {
                        pure: string;
                        "01": string;
                        "02": string;
                        "03": string;
                    };
                    secondary: {
                        pure: string;
                        "01": string;
                        "02": string;
                        "03": string;
                    };
                    tertiary: {
                        pure: string;
                        "01": string;
                        "02": string;
                        "03": string;
                    };
                    test: {
                        pure: string;
                    };
                };
            };
            fontSize: {
                xxxs: string;
                xxs: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                xxxl: string;
                display: string;
                giant: string;
            };
            fontFamily: {
                sans: string;
            };
            fontWeight: {
                light: string;
                regular: string;
                medium: string;
                semibold: string;
                bold: string;
                extrabold: string;
            };
            spacing: {
                "inline-quark": string;
                "inline-nano": string;
                "inline-xxxs": string;
                "inline-xxs": string;
                "inline-xs": string;
                "inline-sm": string;
                "inline-md": string;
                "inline-lg": string;
                "inline-xl": string;
                "inset-quark": string;
                "inset-nano": string;
                "inset-xs": string;
                "inset-sm": string;
                "inset-md": string;
                "inset-lg": string;
                "size-quark": string;
                "size-nano": string;
                "size-xxxs": string;
                "size-xxs": string;
                "size-xs": string;
                "size-sm": string;
                "size-md": string;
                "size-lg": string;
                "size-xl": string;
                "size-xxl": string;
                "size-xxxl": string;
                "size-huge": string;
                "size-giant": string;
                "squish-quark": string;
                "squish-nano": string;
                "squish-xs": string;
                "squish-sm": string;
                "stack-quark": string;
                "stack-nano": string;
                "stack-xxxs": string;
                "stack-xxs": string;
                "stack-xs": string;
                "stack-sm": string;
                "stack-md": string;
                "stack-lg": string;
                "stack-xl": string;
                "stack-xxl": string;
                "stack-xxxl": string;
                "stack-huge": string;
                "stack-giant": string;
            };
        };
    };
};

export { COLORS, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, SPACING, config as eloquentPreset };
