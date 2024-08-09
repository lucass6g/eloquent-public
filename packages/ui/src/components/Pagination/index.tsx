import * as React from "react";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis as EllipsisIcon,
} from "lucide-react";

import { buttonVariants } from "../Button/variants";
import { baseVariants } from "./variants";
import {
  ContentElement,
  ContentProps,
  EllipsisProps,
  InputProps,
  ItemElement,
  ItemProps,
  LabelProps,
  LinkProps,
  RootProps,
} from "./Pagination.props";
import { Input as EloquentInput } from "../Input";
import { Button } from "../Button";

const {
  rootVariants,
  contentVariants,
  linksVariants,
  ellipsisVariants,
  ellipsisLabelVariants,
  labelVariants,
  formVariants,
  formTextVariants,
  formInputVariants,
  formButtonVariants,
  iconsVariants,
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

const Link = function EloquentPaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: LinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={buttonVariants({
        variant: isActive ? "secondary" : "icon",
        size,
        className,
      })}
      {...props}
    />
  );
};

const FirstPage = function EloquentPaginationFirstPage({
  className,
  ...props
}: LinkProps) {
  return (
    <Link
      aria-label="Primeira página"
      size="icon"
      className={linksVariants({ className })}
      {...props}
    >
      <ChevronsLeft className={iconsVariants({ className })} />
    </Link>
  );
};

const Previous = function EloquentPaginationPrevious({
  className,
  ...props
}: LinkProps) {
  return (
    <Link
      aria-label="Página anterior"
      size="icon"
      className={linksVariants({ className })}
      {...props}
    >
      <ChevronLeft className={iconsVariants({ className })} />
    </Link>
  );
};

const LastPage = function EloquentPaginationPrevious({
  className,
  ...props
}: LinkProps) {
  return (
    <Link
      aria-label="Última página"
      size="icon"
      className={linksVariants({ className })}
      {...props}
    >
      <ChevronsRight className={iconsVariants({ className })} />
    </Link>
  );
};

const Next = function EloquentPaginationNext({
  className,
  ...props
}: LinkProps) {
  return (
    <Link
      aria-label="Próxima página"
      size="icon"
      className={linksVariants({ className })}
      {...props}
    >
      <ChevronRight className={iconsVariants({ className })} />
    </Link>
  );
};

const Ellipsis = function EloquentPaginationEllipsis({
  className,
  ...props
}: EllipsisProps) {
  return (
    <span aria-hidden className={ellipsisVariants({ className })} {...props}>
      <EllipsisIcon className={iconsVariants({ className })} />
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
      <Button
        size="icon"
        variant="icon"
        type="submit"
        className={formButtonVariants()}
      >
        <ChevronRight className={iconsVariants()} />
      </Button>
    </form>
  );
};

export const Pagination = {
  Root,
  Content,
  Link,
  Item,
  FirstPage,
  Previous,
  LastPage,
  Next,
  Ellipsis,
  Label,
  Form,
};
