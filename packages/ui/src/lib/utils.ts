import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function flattenColors(colors: string | object): { [key: string]: string } {
  return Object.entries(colors).reduce((acc: { [key: string]: string }, [key, value]) => {
    if (typeof value === 'string') {
      return { ...acc, [key]: value };
    }
    const flattenedSubColors = flattenColors(value);
    for (let subKey in flattenedSubColors) {
      acc[`${key}.${subKey}`] = flattenedSubColors[subKey];
    }
    return acc;
  }, {});
}
