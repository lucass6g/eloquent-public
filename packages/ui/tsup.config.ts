import { defineConfig } from 'tsup';

export default defineConfig((options) => {
    const formatString = Array.isArray(options.format)
        ? options.format.join("-")
        : options.format ?? "esm";
    return {
        name: "@eloquent/ui",
        entry: {
            index: "src/index.ts",
            "Accordion/index": "src/components/Accordion/index.tsx",
            "Alert/index": "src/components/Alert/index.tsx",
            "AlertDialog/index": "src/components/AlertDialog/index.tsx",
            "AspectRatio/index": "src/components/AspectRatio/index.tsx",
            "Avatar/index": "src/components/Avatar/index.tsx",
            "Badge/index": "src/components/Badge/index.tsx",
            "Breadcrumb/index": "src/components/Breadcrumb/index.tsx",
            "Button/index": "src/components/Button/index.tsx",
            "Calendar/index": "src/components/Calendar/index.tsx",
            "Card/index": "src/components/Card/index.tsx",
            "Carousel/index": "src/components/Carousel/index.tsx",
            "Checkbox/index": "src/components/Checkbox/index.tsx",
            "Collapsible/index": "src/components/Collapsible/index.tsx",
            "Command/index": "src/components/Command/index.tsx",
            "ContextMenu/index": "src/components/ContextMenu/index.tsx",
            "Dialog/index": "src/components/Dialog/index.tsx",
            "Drawer/index": "src/components/Drawer/index.tsx",
            "DropdownMenu/index": "src/components/DropdownMenu/index.tsx",
            "Form/index": "src/components/Form/index.tsx",
            "HoverCard/index": "src/components/HoverCard/index.tsx",
            "Input/index": "src/components/Input/index.ts",
            "InputOtp/index": "src/components/InputOtp/index.tsx",
            "Label/index": "src/components/Label/index.tsx",
            "Menubar/index": "src/components/Menubar/index.tsx",
            "NavigationMenu/index": "src/components/NavigationMenu/index.tsx",
            "Pagination/index": "src/components/Pagination/index.tsx",
            "Popover/index": "src/components/Popover/index.tsx",
            "Progress/index": "src/components/Progress/index.tsx",
            "RadioGroup/index": "src/components/RadioGroup/index.tsx",
            "Resizable/index": "src/components/Resizable/index.tsx",
            "ScrollArea/index": "src/components/ScrollArea/index.tsx",
            "Select/index": "src/components/Select/index.tsx",
            "Separator/index": "src/components/Separator/index.tsx",
            "Sheet/index": "src/components/Sheet/index.tsx",
            "Skeleton/index": "src/components/Skeleton/index.tsx",
            "Slider/index": "src/components/Slider/index.tsx",
            "Sonner/index": "src/components/Sonner/index.tsx",
            "Switch/index": "src/components/Switch/index.tsx",
            "Table/index": "src/components/Table/index.tsx",
            "Tabs/index": "src/components/Tabs/index.tsx",
            "Textarea/index": "src/components/Textarea/index.tsx",
            "Toast/index": "src/components/Toast/index.tsx",
            "Toaster/index": "src/components/Toaster/index.tsx",
            "Toggle/index": "src/components/Toggle/index.tsx",
            "ToggleGroup/index": "src/components/ToggleGroup/index.tsx",
            "Tooltip/index": "src/components/Tooltip/index.tsx",
            "Typography/index": "src/components/Typography/index.ts",
            useToast: "src/components/use-toast.ts",
        },
        format: options.format ?? ["esm"],
        external: ["react", "react-dom", "react-hook-form"],
        minify: false,
        tsconfig: `tsconfig-${formatString ?? "esm"}.json`,
        clean: true,
        dts: true,
        target: "es2022",
        silent: false,
        outDir: `dist/${formatString ?? "esm"}`,
    }
})