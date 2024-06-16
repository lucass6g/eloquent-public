'use client'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button, Calendar, Popover } from '../'
import useDate from './useDate'

export function DatePickerDemo() {
    const { date, setDate } = useDate()

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'w-[280px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground',
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                        format(date, 'PPP', { locale: ptBR })
                    ) : (
                        <span>Escolha a data</span>
                    )}
                </Button>
            </Popover.Trigger>
            <Popover.Content className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </Popover.Content>
        </Popover.Root>
    )
}
