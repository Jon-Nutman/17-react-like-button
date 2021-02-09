import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
let count = 0
function App() {
  
const [text, setText] = useState(0)
function handleClick(){
  setText(count = count + 1)
}
  return (
    <div>
      {text}
     <button onClick={handleClick}>likes</button>
    </div>
  );
}

export default App;
