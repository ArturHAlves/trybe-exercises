import Form from './Components/Form';
import Hello from './Components/Hello';

import { CostumerProvider } from './Context/CostumContext';

function App() {
  return (
    <div>
      <CostumerProvider>
        <Hello />
        <Form />
      </CostumerProvider>
    </div>
  );
}

export default App;
