'use client'

import { ptBR } from 'date-fns/locale'
import { Index } from '../'
import useDate from './useDate'

export function CalendarDemo() {
  const { date, setDate } = useDate()

  return (
    <Index
      mode="single"
      locale={ptBR}
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}
