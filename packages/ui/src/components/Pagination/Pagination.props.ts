import { ButtonProps } from "../Button/Button.props";

export type RootProps = React.ComponentProps<"nav">;

export type ContentElement = HTMLUListElement;
export type ContentProps = React.ComponentProps<"ul">;

export type ItemElement = HTMLLIElement;
export type ItemProps = React.ComponentProps<"li">;

export type LinkVariantsProps = {
  isActive?: boolean;
};
export type LinkProps = Pick<ButtonProps, "size"> &
  React.ComponentProps<"a"> &
  LinkVariantsProps;

export type EllipsisProps = React.ComponentProps<"span">;
