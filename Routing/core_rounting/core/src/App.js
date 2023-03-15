import Form from "./components/Form";
import People from "./components/People";
import Planet from "./components/Planet";
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
<div>
   <h1>Luke API-walker</h1>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People/>}/>
        <Route path="/planets/:id" element={<Planet/>}/>      
      </Routes>
      </div>
  );
}

export default App;