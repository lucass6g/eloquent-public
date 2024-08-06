'use client'

import { addDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { cn } from '../lib/utils'
import { Button, Calendar, Popover, Select} from '../'

export function DatePickerWithPresets() {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button
                    variant={'secondary'}
                    className={cn(
                        'w-[280px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground',
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                        format(date, 'PPP', { locale: ptBR })
                    ) : (
                        <span>Escolha data</span>
                    )}
                </Button>
            </Popover.Trigger>
            <Popover.Content className="flex w-auto flex-col space-y-2 p-2">
                <Select.Root
                    onValueChange={(value) =>
                        setDate(addDays(new Date(), parseInt(value)))
                    }
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Select" />
                    </Select.Trigger>
                    <Select.Content position="popper">
                        <Select.Item value="0">Hoje</Select.Item>
                        <Select.Item value="1">Amanhã</Select.Item>
                        <Select.Item value="3">em 3 dias</Select.Item>
                        <Select.Item value="7">em uma semana</Select.Item>
                    </Select.Content>
                </Select.Root>
                <div className="rounded-md border">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        locale={ptBR}
                    />
                </div>
            </Popover.Content>
        </Popover.Root>
    )
}
