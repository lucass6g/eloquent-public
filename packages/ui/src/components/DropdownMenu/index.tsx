"use client";

import * as React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import { cn } from "@eloquent/styles";

import {
  itemVariants,
  labelVariants,
  subTriggerVariants,
  iconVariants,
  baseVariants,
} from "./variants";
import {
  CheckboxItemElement,
  CheckboxItemProps,
  ContentElement,
  ContentProps,
  IconProps,
  ItemElement,
  ItemProps,
  LabelElement,
  LabelProps,
  RadioItemElement,
  RadioItemProps,
  SeparatorElement,
  SeparatorProps,
  ShortcutProps,
  SubContentElement,
  SubContentProps,
  SubTriggerElement,
  SubTriggerProps,
  TriggerElement,
  TriggerProps,
} from "./DropdownMenu.props";

const {
  checkboxItem,
  checkboxItemIcon,
  checkboxItemIconWrapper,
  content,
  radioItem,
  radioItemIcon,
  radioItemIconWrapper,
  separator,
  shortcut,
  subContent,
  subTriggerIcon,
  trigger,
  triggerIcon,
} = baseVariants();

const Root = DropdownMenuPrimitive.Root;

const Trigger = React.forwardRef<TriggerElement, TriggerProps>(
  ({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.Trigger ref={ref} {...props}>
      {typeof children === "string" ? (
        <button className={cn(trigger(), className)}>
          {children}
          <ChevronDownIcon color="currentColor" className={triggerIcon()} />
        </button>
      ) : (
        children
      )}
    </DropdownMenuPrimitive.Trigger>
  )
);

Trigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

const Group = DropdownMenuPrimitive.Group;

const Portal = DropdownMenuPrimitive.Portal;

const Sub = DropdownMenuPrimitive.Sub;

const RadioGroup = DropdownMenuPrimitive.RadioGroup;

const SubTrigger = React.forwardRef<SubTriggerElement, SubTriggerProps>(
  ({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(subTriggerVariants({ inset }), className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className={subTriggerIcon()} />
    </DropdownMenuPrimitive.SubTrigger>
  )
);
SubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const SubContent = React.forwardRef<SubContentElement, SubContentProps>(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(subContent(), className)}
      {...props}
    />
  )
);
SubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const Content = React.forwardRef<ContentElement, ContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(content(), className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
);
Content.displayName = DropdownMenuPrimitive.Content.displayName;

const Item = React.forwardRef<ItemElement, ItemProps>(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(itemVariants({ inset }), className)}
      {...props}
    />
  )
);
Item.displayName = DropdownMenuPrimitive.Item.displayName;

const Icon = ({ className, position, ...props }: IconProps) => {
  return (
    <div className={cn(iconVariants({ position }), className)} {...props} />
  );
};
Icon.displayName = "DropdownMenuIcon";

const CheckboxItem = React.forwardRef<CheckboxItemElement, CheckboxItemProps>(
  ({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(checkboxItem(), className)}
      checked={checked}
      {...props}
    >
      <span className={checkboxItemIconWrapper()}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className={checkboxItemIcon()} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
);
CheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const RadioItem = React.forwardRef<RadioItemElement, RadioItemProps>(
  ({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(radioItem(), className)}
      {...props}
    >
      <span className={radioItemIconWrapper()}>
        <DropdownMenuPrimitive.ItemIndicator>
          <DotFilledIcon className={radioItemIcon()} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
);
RadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const Label = React.forwardRef<LabelElement, LabelProps>(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(labelVariants({ inset }), className)}
      {...props}
    />
  )
);
Label.displayName = DropdownMenuPrimitive.Label.displayName;

const Separator = React.forwardRef<SeparatorElement, SeparatorProps>(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn(separator(), className)}
      {...props}
    />
  )
);
Separator.displayName = DropdownMenuPrimitive.Separator.displayName;

const Shortcut = ({ className, ...props }: ShortcutProps) => {
  return <span className={cn(shortcut(), className)} {...props} />;
};
Shortcut.displayName = "DropdownMenuShortcut";

export const DropdownMenu = {
  Root,
  Trigger,
  Content,
  Item,
  Icon,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  Shortcut,
  Group,
  Portal,
  Sub,
  SubContent,
  SubTrigger,
  RadioGroup,
};
