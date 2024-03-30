import { Button, Typography } from "@eloquent/ui";

function App() {
  return (
    <>
      <Typography.Heading size={"medium"}>Testando Heading</Typography.Heading>
      <Button variant="primary" onClick={() => console.log('Clicando')}>Testando Button</Button>
    </>
  )
}

export default App;
