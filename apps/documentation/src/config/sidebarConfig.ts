import type {NavItem, SidebarNav} from "@/types/nav";

export type DocsConfig = {
    nav: (NavItem & SidebarNav)[];
};

export const sidebarConfig: DocsConfig = {
    nav: [
        {
            label: "Começando",
            children: [
                {
                    label: "Introdução",
                    href: "/",
                },
                {
                    label: "Instalação",
                    href: "/getting-started/installation",
                },
                {
                    label: "Requisitos",
                    href: "/getting-started/requirements",
                },
            ],
        },
        {
            label: "Instalação",
            children: [
                {
                    label: "Next.js TS",
                    href: "/installation/nextjs",
                },
                {
                    label: "Next.js JS",
                    href: "/installation/nextjs-2",
                },
            ],
        },
        // {
        //   label: "Theming",
        //   children: [
        //     {
        //       label: "Tailwind Plugin",
        //       href: "/theming/tailwind-css-plugin",
        //     },
        //     {
        //       label: "Color System",
        //       href: "/theming/color-system",
        //     },
        //     {
        //       label: "Default Themes",
        //       href: "/theming/default-themes",
        //     },
        //     {
        //       label: "Custom Themes",
        //       href: "/theming/custom-themes",
        //     },
        //     {
        //       label: "Additional Utilities",
        //       href: "/theming/additional-utilities",
        //     },
        //   ],
        // },
        {
            label: "Components",
            children: [
                {
                    label: "Alert",
                    href: "/components/alert",
                    disabled: true


                },
                {
                    label: "Avatar",
                    href: "/components/avatar",
                    disabled: true
                },

                {
                    label: "Avatar Group",
                    href: "/components/avatar-group",
                    disabled: true
                },

                {
                    label: "Badge",
                    href: "/components/badge",
                    disabled: true
                },

                {
                    label: "Button",
                    href: "/components/button",
                    disabled: false,
                },
                {
                    label: "Button Group",
                    href: "/components/button-group",
                    disabled: true
                },
                {
                    label: "Checkbox",
                    href: "/components/checkbox",
                    disabled: true
                },
                {
                    label: "Checkbox Group",
                    href: "/components/checkbox-group",
                    disabled: true
                },
                {
                    label: "Dropdown Menu",
                    href: "/components/dropdown-menu",
                    disabled: true
                },
                {
                    label: "Input",
                    href: "/components/input",
                    disabled: true
                },
                {
                    label: "Kbd",
                    href: "/components/kbd",
                    disabled: true,
                    new: false,
                },
                {
                    label: "Label",
                    href: "/components/label",
                    disabled: true
                },
                {
                    label: "Loading",
                    href: "/components/loading",
                    disabled: true,
                    new: false,
                },
                {
                    label: "Popover",
                    href: "/components/popover",
                    disabled: true
                },
                {
                    label: "Progress Bar",
                    href: "/components/progress-bar",
                    disabled: true,
                    new: false,

                },
                {
                    label: "Progress Circle",
                    href: "/components/progress-circle",
                    disabled: true,
                    new: false,

                },
                {
                    label: "Radio Group",
                    href: "/components/radio-group",
                    disabled: true
                },

                {
                    label: "Slider",
                    href: "/components/slider",
                    disabled: true,
                    new: false,

                },
                {
                    label: "Switch",
                    href: "/components/switch",
                    disabled: true
                },
                {
                    label: "Switch Group",
                    href: "/components/switch-group",
                    disabled: true
                },
                {
                    label: "Tabs",
                    href: "/components/tabs",
                    disabled: true
                },
                {
                    label: "Tag",
                    href: "/components/tag",
                    disabled: true
                },
                {
                    label: "Textarea",
                    href: "/components/textarea",
                    disabled: true
                },
                {
                    label: "Toggle",
                    href: "/components/toggle",
                    disabled: true
                },
                {
                    label: "Toggle Group",
                    href: "/components/toggle-group",
                    disabled: true
                },
                {
                    label: "Tooltip",
                    href: "/components/tooltip",
                    disabled: true
                },
                {
                    label: "Number Input",
                    href: "/components/number-input",
                    disabled: true
                },
                {
                    label: "Select",
                    href: "/components/select",
                    disabled: true
                },
            ],
        },
    ],
};
