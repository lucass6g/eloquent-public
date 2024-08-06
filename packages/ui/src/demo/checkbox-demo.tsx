"use client";

import { Checkbox } from "../";

export function CheckboxDemo() {
  return (
    <div className="flex items-center justify-center space-x-2 gap-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Aceitar termos e condições da promoção
      </label>
    </div>
  );
}
