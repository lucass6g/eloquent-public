import * as React from "react"

import { iconContainerVariants } from "./variants"

export interface IContainer
    extends React.TextareaHTMLAttributes<HTMLDivElement> { }

type ContainerProps = {
    size?: 'small' | 'medium' | 'large'
}

const Container = React.forwardRef<HTMLDivElement, IContainer & ContainerProps>(
    function ContainerEloquent({ className, children, size, ...props }, ref) {
        return (
            <div
                className={iconContainerVariants({ size, className })}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        )
    }
)

export const Icon = { Container }