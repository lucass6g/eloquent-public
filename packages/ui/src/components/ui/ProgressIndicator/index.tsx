import { cn } from "../../../lib/utils.ts";
import { stepClasses } from "./styles.ts";
import { ProgressIndicatorProps } from "./ProgressIndicator.ts";



export const ProgressIndicator = ({
  size,
  activeIndex,
  inverse = false,
  className,
}: ProgressIndicatorProps) => (
  <div className={cn("flex gap-2", className)}>
    {Array(size)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className={stepClasses({
            active: index === activeIndex,
            inverse: inverse,
          })}
        />
      ))}
  </div>
);
