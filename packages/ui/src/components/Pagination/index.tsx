import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

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
  previousVariants,
  nextVariants,
  ellipsisVariants,
  ellipsisLabelVariants,
  labelVariants,
  withFormVariants,
  withFormTextVariants,
  withFormInputVariants,
  withFormButtonVariants,
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
      className={previousVariants({ className })}
      {...props}
    >
      <DoubleArrowLeftIcon className={iconsVariants({ className })} />
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
      className={previousVariants({ className })}
      {...props}
    >
      <ChevronLeftIcon className={iconsVariants({ className })} />
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
      className={previousVariants({ className })}
      {...props}
    >
      <DoubleArrowRightIcon className={iconsVariants({ className })} />
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
      className={nextVariants({ className })}
      {...props}
    >
      <ChevronRightIcon className={iconsVariants({ className })} />
    </Link>
  );
};

const Ellipsis = function EloquentPaginationEllipsis({
  className,
  ...props
}: EllipsisProps) {
  return (
    <span aria-hidden className={ellipsisVariants({ className })} {...props}>
      <DotsHorizontalIcon className={iconsVariants({ className })} />
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

const WithForm = function EloquentPaginationInput({
  className,
  current,
  total,
  ...props
}: InputProps) {
  return (
    <form className={withFormVariants({ className })} {...props}>
      <span className={withFormTextVariants()}>Ir para página</span>
      <EloquentInput.Numeric
        min={1}
        max={total}
        value={current}
        className={withFormInputVariants()}
      />
      <span className={withFormTextVariants()}>de {total}</span>
      <Button
        size="icon"
        variant="icon"
        type="submit"
        className={withFormButtonVariants()}
      >
        <ChevronRightIcon className={iconsVariants()} />
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
  WithForm,
};
