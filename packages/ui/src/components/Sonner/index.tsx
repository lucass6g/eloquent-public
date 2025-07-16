"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import { sonnerSlots } from "./variants"

type ToasterProps = React.ComponentProps<typeof Sonner>

export const SonnerToaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()
  const {  actionButtonSyle, cancelButtonStyle, descriptionStyle, toastStyle} = sonnerSlots();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            toastStyle(),
          description: descriptionStyle(),
          actionButton:
            actionButtonSyle(),
          cancelButton:
            cancelButtonStyle(),
        },
      }}
      {...props}
    />
  )
}

