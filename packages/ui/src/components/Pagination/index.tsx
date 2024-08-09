import * as React from "react";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis as EllipsisIcon,
} from "lucide-react";

import { baseVariants } from "./variants";
import {
  ContentElement,
  ContentProps,
  EllipsisProps,
  InputProps,
  ItemElement,
  ItemProps,
  LabelProps,
  ButtonProps,
  RootProps,
} from "./Pagination.props";
import { Input as EloquentInput } from "../Input";
import { Button as EloquentButton } from "../Button";

const {
  rootVariants,
  buttonsVariants,
  contentVariants,
  ellipsisLabelVariants,
  ellipsisVariants,
  formButtonVariants,
  formInputVariants,
  formTextVariants,
  formVariants,
  iconsVariants,
  labelVariants,
} = baseVariants();

const Root = function EloquentPaginationRoot({
  className,
  ...props
}: RootProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={rootVariants({ className })}
      {...props}
    />
  );
};

const Content = React.forwardRef<ContentElement, ContentProps>(
  function EloquentPaginationContent({ className, ...props }, ref) {
    return (
      <ul ref={ref} className={contentVariants({ className })} {...props} />
    );
  }
);

const Item = React.forwardRef<ItemElement, ItemProps>(
  function EloquentPaginationItem({ ...props }, ref) {
    return <li ref={ref} {...props} />;
  }
);

const Button = function EloquentPaginationButton({
  className,
  disabled,
  size = "icon",
  variant = "icon",
  isActive = false,
  ...props
}: ButtonProps) {
  return (
    <EloquentButton
      disabled={disabled}
      variant={variant}
      size={size}
      data-active={isActive}
      className={buttonsVariants({ className })}
      {...props}
    />
  );
};

const FirstPage = function EloquentPaginationFirstPage({
  className,
  ...props
}: ButtonProps) {
  return (
    <Button aria-label="Primeira página" {...props}>
      <ChevronsLeft className={iconsVariants()} />
    </Button>
  );
};

const Previous = function EloquentPaginationPrevious({
  className,
  ...props
}: ButtonProps) {
  return (
    <Button aria-label="Página anterior" {...props}>
      <ChevronLeft className={iconsVariants()} />
    </Button>
  );
};

const LastPage = function EloquentPaginationPrevious({
  className,
  ...props
}: ButtonProps) {
  return (
    <Button aria-label="Última página" {...props}>
      <ChevronsRight className={iconsVariants()} />
    </Button>
  );
};

const Next = function EloquentPaginationNext({
  className,
  ...props
}: ButtonProps) {
  return (
    <Button aria-label="Próxima página" {...props}>
      <ChevronRight className={iconsVariants()} />
    </Button>
  );
};

const Ellipsis = function EloquentPaginationEllipsis({
  className,
  ...props
}: EllipsisProps) {
  return (
    <span aria-hidden className={ellipsisVariants({ className })} {...props}>
      <EllipsisIcon className={iconsVariants()} />
      <span className={ellipsisLabelVariants()}>Mais páginas</span>
    </span>
  );
};

const Label = function EloquentPaginationLabel({
  className,
  current,
  total,
  ...props
}: LabelProps) {
  return (
    <span className={labelVariants({ className })} {...props}>
      Página {current} de {total}
    </span>
  );
};

const Form = function EloquentPaginationInput({
  className,
  current,
  total,
  ...props
}: InputProps) {
  return (
    <form
      role="navigation"
      aria-label="pagination"
      className={formVariants({ className })}
      {...props}
    >
      <span className={formTextVariants()}>Ir para página</span>
      <EloquentInput.Numeric
        min={1}
        max={total}
        value={current}
        className={formInputVariants()}
      />
      <span className={formTextVariants()}>de {total}</span>
      <Button type="submit" className={formButtonVariants()}>
        <ChevronRight className={iconsVariants()} />
      </Button>
    </form>
  );
};

export const Pagination = {
  Root,
  Content,
  Button,
  Item,
  FirstPage,
  Previous,
  LastPage,
  Next,
  Ellipsis,
  Label,
  Form,
};
