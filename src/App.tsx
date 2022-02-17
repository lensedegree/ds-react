import { Button } from "./components/Button";

import './global.css'

function App() {
  return (
    <div className="container">
      <Button variant="basic">Descobrir mais</Button>

      <div className="variant-container">
        <Button>Primary</Button>
        <Button size="medium">Primary</Button>
        <Button size="small">Primary</Button>
      </div>

      <div className="variant-container">
        <Button variant="secundary">Secundary</Button>
        <Button variant="secundary" size="medium">Secundary</Button>
        <Button variant="secundary" size="small">Secundary</Button>
      </div>

      <div className="variant-container">
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="tertiary" size="medium">Tertiary</Button>
        <Button variant="tertiary" size="small">Tertiary</Button>
      </div>
    </div>
  );
}

export default App;
