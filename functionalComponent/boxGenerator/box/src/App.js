import Display from './components/Display';
import Form from './components/Form';
import { useState } from 'react';
import './App.css';

function App() {
  const[boxes,setBoxes]=useState(["red","blue"])
  const addBox= (newBox)=>{
    setBoxes([...boxes,newBox])
  }
  
  return (
    <div className="App">
      <Form addBox= {addBox} />
      <Display boxes= {boxes}  />
    </div>
  );
}

export default App;