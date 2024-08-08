import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";

import { buttonVariants } from "../Button/variants";
import { baseVariants } from "./variants";
import {
  ContentElement,
  ContentProps,
  EllipsisProps,
  ItemElement,
  ItemProps,
  LinkProps,
  RootProps,
} from "./Pagination.props";

const {
  rootVariants,
  contentVariants,
  previousVariants,
  nextVariants,
  ellipsisVariants,
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

const Previous = function EloquentPaginationPrevious({
  className,
  ...props
}: LinkProps) {
  return (
    <Link
      aria-label="Página anterior"
      size="default"
      className={previousVariants({ className })}
      {...props}
    >
      <ChevronLeftIcon className={iconsVariants({ className })} />
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
      size="default"
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
      <span className="sr-only">More pages</span>
    </span>
  );
};

export const Pagination = {
  Root,
  Content,
  Link,
  Item,
  Previous,
  Next,
  Ellipsis,
};
