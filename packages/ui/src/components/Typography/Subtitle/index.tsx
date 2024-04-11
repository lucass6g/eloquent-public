"use client";
import { forwardRef }                     from 'react'
import { SubtitleElement, SubtitleProps } from './Subtitle'

export const Subtitle = forwardRef<SubtitleElement, SubtitleProps>(
  ({ children, as: Subtitle = 'h3', inverse, ...props }, forwardedRef) => (
    <Subtitle ref={forwardedRef} {...props}>
      {children}
    </Subtitle>
  ),
)

Subtitle.displayName = 'OrbSubtitle'
