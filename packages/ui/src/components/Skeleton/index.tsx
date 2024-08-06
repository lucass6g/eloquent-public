import { cn } from "@eloquent/styles"
import { skeletonVariants } from "./variants"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(skeletonVariants({ className }))}
      {...props}
    />
  )
}

export { Skeleton }
