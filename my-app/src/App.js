import { useState, useEffect } from 'react';

import './App.css';
function App() {

// Without useEffect
const [counter, setCounter] = useState(0) 
const [likes, setLikes] = useState('likes')
function handleClick(){
  setCounter(counter + 1)
  if (counter === 0){
    setLikes('like')
  }else{
    setLikes('likes')
  }
}
  return (
    <div>
     <button id="myButton" onClick={handleClick}>{counter}  {likes}</button>
    </div>
  );
}

export default App;
