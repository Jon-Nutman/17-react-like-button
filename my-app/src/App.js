import { useState, useEffect } from 'react';
import { useState2 } from 'react';

import './App.css';
let count = 0
function App() {

//   useEffect(() => {
// console.log('lllll', counter)
//   }, [counter])
  
const [counter, setCounter] = useState(0) 
const [likes, setLikes] = useState('likes')
function handleClick(){
  setCounter(count = count + 1)
  if (count === 1){
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
