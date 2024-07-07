import type { NavItem, SidebarNav } from "@/types/nav";

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

        },
        {
          label: "Avatar",
          href: "/components/avatar",
        },
        {
          label: "Avatar Group",
          href: "/components/avatar-group",
        },
        {
          label: "Badge",
          href: "/components/badge",
        },
        {
          label: "Button",
          href: "/components/button",
        },
        {
          label: "Button Group",
          href: "/components/button-group",
        },
        {
          label: "Checkbox",
          href: "/components/checkbox",
        },
        {
          label: "Checkbox Group",
          href: "/components/checkbox-group",
        },
        {
          label: "Dropdown Menu",
          href: "/components/dropdown-menu",
        },
        {
          label: "Input",
          href: "/components/input",
        },
        {
          label: "Kbd",
          href: "/components/kbd",
          new: false,
        },
        {
          label: "Label",
          href: "/components/label",
        },
        {
          label: "Loading",
          href: "/components/loading",
          new: true,
        },
        {
          label: "Popover",
          href: "/components/popover",
        },
        {
          label: "Progress Bar",
          href: "/components/progress-bar",
          new: true,
        },
        {
          label: "Progress Circle",
          href: "/components/progress-circle",
          new: true,
        },
        {
          label: "Radio Group",
          href: "/components/radio-group",
        },
        {
          label: "Slider",
          href: "/components/slider",
          new: true,
        },
        {
          label: "Switch",
          href: "/components/switch",
        },
        {
          label: "Switch Group",
          href: "/components/switch-group",
        },
        {
          label: "Tabs",
          href: "/components/tabs",
        },
        {
          label: "Tag",
          href: "/components/tag",
        },
        {
          label: "Textarea",
          href: "/components/textarea",
        },
        {
          label: "Toggle",
          href: "/components/toggle",
        },
        {
          label: "Toggle Group",
          href: "/components/toggle-group",
        },
        {
          label: "Tooltip",
          href: "/components/tooltip",
        },
        {
          label: "Number Input",
          href: "/components/number-input",
          disabled: true,
        },
        {
          label: "Select",
          href: "/components/select",
          disabled: true,
        },
      ],
    },
  ],
};
