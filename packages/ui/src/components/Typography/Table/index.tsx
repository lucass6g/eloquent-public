import {forwardRef} from "react";
import {TableElement, TableProps} from "./Table.props.ts";
import {cn} from "@eloquent/styles";
import {tableVariants} from "./variants.ts";

export const Table = forwardRef<TableElement, TableProps>(
    function Table({className,variant="title",...rest}, ref) {
        return (
            <h6
                ref={ref}
                className={cn(tableVariants({
                    className,
                    variant
                }))}
                {...rest}
            />
        )
    }
)
