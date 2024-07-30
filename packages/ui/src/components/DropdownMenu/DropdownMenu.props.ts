import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ElementRef, ComponentPropsWithoutRef, ComponentProps } from "react";

export type TriggerElement = ElementRef<typeof DropdownMenuPrimitive.Trigger>;
export type TriggerProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Trigger
>;

export type SubTriggerElement = ElementRef<
  typeof DropdownMenuPrimitive.SubTrigger
>;
export type SubTriggerVariantsProps = { inset?: boolean };
export type SubTriggerProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubTrigger
> &
  SubTriggerVariantsProps;

export type SubContentElement = ElementRef<
  typeof DropdownMenuPrimitive.SubContent
>;
export type SubContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubContent
>;

export type ContentElement = ElementRef<typeof DropdownMenuPrimitive.Content>;
export type ContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>;

export type ItemElement = ElementRef<typeof DropdownMenuPrimitive.Item>;
export type ItemVariantsProps = { inset?: boolean };
export type ItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> &
  ItemVariantsProps;

export type IconVariantsProps = { position: "left" | "right" };
export type IconProps = ComponentProps<"div"> & IconVariantsProps;

export type CheckboxItemElement = ElementRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;
export type CheckboxItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

export type RadioItemElement = ElementRef<
  typeof DropdownMenuPrimitive.RadioItem
>;
export type RadioItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioItem
>;

export type LabelElement = ElementRef<typeof DropdownMenuPrimitive.Label>;
export type LabelPropsVariantsProps = { inset?: boolean };
export type LabelProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Label
> &
  LabelPropsVariantsProps;

export type SeparatorElement = ElementRef<
  typeof DropdownMenuPrimitive.Separator
>;
export type SeparatorProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>;

export type ShortcutProps = ComponentProps<"span">;
