"use client";

import { Checkbox, Label } from "../";

export function CheckboxWithText() {
  return (
    <div className="items-top flex space-x-2 gap-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <Label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Aceitar termos e condições da promoção
        </Label>
        <p className="text-sm text-muted-foreground">
          Você concorda com nossos Termos de Serviço e Política de Privacidade.
        </p>
      </div>
    </div>
  );
}
