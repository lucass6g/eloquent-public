import { Switch } from ".";
import { useState } from "react";

export function SwitchDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center space-x-2">
      <Switch.Button
        id="airplane-mode"
        checked={checked}
        onCheckedChange={() => setChecked(!checked)}
        aria-readonly
      />
      <Switch.Label htmlFor="airplane-mode">Modo Avião</Switch.Label>
    </div>
  );
}
