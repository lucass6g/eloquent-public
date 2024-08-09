import React from "react";
import { ButtonProps as EloquentButtonProps } from "../Button/Button.props";

export type RootProps = React.ComponentProps<"nav">;

export type ContentElement = HTMLUListElement;
export type ContentProps = React.ComponentProps<"ul">;

export type ItemElement = HTMLLIElement;
export type ItemProps = React.ComponentProps<"li">;

export type ButtonProps = EloquentButtonProps;

export type EllipsisProps = React.ComponentProps<"span">;

export type LabelProps = React.ComponentProps<"span"> & {
  current: number;
  total: number;
};

export type InputProps = React.ComponentProps<"form"> & {
  current: number;
  total: number;
};
