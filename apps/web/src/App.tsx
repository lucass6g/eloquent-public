import { Button } from "@eloquent/ui";
import {Typography} from "@eloquent/ui/typography"

function App() {
  return (
    <div>
      <Typography.Heading size={"large"}>Testando Heading</Typography.Heading>
      <Button variant="secondary" onClick={() => console.log('Clicando')}>Testando Button</Button>
    </div>
  )
}

export default App;
