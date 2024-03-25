import React, { ReactElement, ReactNode } from 'react'

type ConditionalSwitchProps = {
  children: ReactNode
}

type CaseProps = {
  children: ReactNode
  condition?: boolean
}

type DefaultProps = {
  children: ReactNode
}

export const Case = ({ children }: CaseProps) => children

export const Default = ({ children }: DefaultProps) => children

export const Switch = ({
  children,
}: ConditionalSwitchProps): JSX.Element | null => {
  let matchChild: ReactElement | null = null
  let defaultCase: ReactElement | null = null

  React.Children.forEach(children, (child: ReactNode) => {
    if (!React.isValidElement(child)) return
    if (child.type === Case && !child.props.children) {
      throw new Error('Case must have children')
    }
    if (child.type === Default && !child.props.children) {
      throw new Error('Default must have children')
    }

    if (!matchChild && child.type === Case) {
      const { condition } = child.props

      if (condition) {
        matchChild = child
      }
    } else if (!defaultCase && child.type === Default) {
      defaultCase = child
    }
  })

  return matchChild ?? defaultCase ?? null
}
