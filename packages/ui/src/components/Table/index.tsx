import * as React from "react";

import {
  CaptionElement,
  CaptionProps,
  CellElement,
  CellProps,
  HeadElement,
  HeadProps,
  RootElement,
  RootProps,
  RowElement,
  RowProps,
  SectionElement,
  SectionProps,
} from "./Table.props";
import { baseVariants } from "./variants";

const {
  rootWrapperVariants,
  rootTableVariants,
  headerVariants,
  bodyVariants,
  footerVariants,
  rowVariants,
  headVariants,
  cellVariants,
  captionVariants,
} = baseVariants();

const Root = React.forwardRef<RootElement, RootProps>(function EloquentTable(
  { className, ...props },
  ref
) {
  return (
    <div className={rootWrapperVariants()}>
      <table
        ref={ref}
        className={rootTableVariants({ className })}
        {...props}
      />
    </div>
  );
});

const Header = React.forwardRef<SectionElement, SectionProps>(
  function EloquentTableHeader({ className, ...props }, ref) {
    return <thead ref={ref} className={headerVariants(className)} {...props} />;
  }
);

const Body = React.forwardRef<SectionElement, SectionProps>(
  function EloquentTableBody({ className, ...props }, ref) {
    return (
      <tbody ref={ref} className={bodyVariants({ className })} {...props} />
    );
  }
);

const Footer = React.forwardRef<SectionElement, SectionProps>(
  function EloquentTableFooter({ className, ...props }, ref) {
    return (
      <tfoot ref={ref} className={footerVariants({ className })} {...props} />
    );
  }
);

const Row = React.forwardRef<RowElement, RowProps>(function EloquentTableRow(
  { className, ...props },
  ref
) {
  return <tr ref={ref} className={rowVariants({ className })} {...props} />;
});

const Head = React.forwardRef<HeadElement, HeadProps>(
  function EloquentTableHead({ className, ...props }, ref) {
    return <th ref={ref} className={headVariants({ className })} {...props} />;
  }
);

const Cell = React.forwardRef<CellElement, CellProps>(
  function EloquentTableCell({ className, ...props }, ref) {
    return <td ref={ref} className={cellVariants({ className })} {...props} />;
  }
);

const Caption = React.forwardRef<CaptionElement, CaptionProps>(
  function EloquentTableCaption({ className, ...props }, ref) {
    return (
      <caption
        ref={ref}
        className={captionVariants({ className })}
        {...props}
      />
    );
  }
);

export const Table = {
  Root,
  Header,
  Body,
  Footer,
  Head,
  Row,
  Cell,
  Caption,
};
