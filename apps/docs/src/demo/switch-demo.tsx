import { Switch, Label } from "@eloquent/ui";
import { useState } from "react";

export function SwitchDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        checked={checked}
        onCheckedChange={() => setChecked(!checked)}
        aria-readonly
      />
      <Label htmlFor="airplane-mode">Modo Avião</Label>
    </div>
  );
}
