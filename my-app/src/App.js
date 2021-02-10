import { useState, useEffect } from 'react';

import './App.css';
function App() {


const [counter, setCounter] = useState(0) 
const [likes, setLike] = useState('likes')
// Without useEffect
// function handleClick(){
//   setCounter(counter + 1)
//   if (counter === 0){
//     setLikes('like')
//   }else{
//     setLikes('likes')
//   }
// }

// WITH useEffect

useEffect(() => {
  counter === 1 ? setLike('Like') : setLike('Likes')
})

  return (
    <div>
     <button id="myButton" onClick={() => setCounter(counter + 1)}>{counter} {likes}</button>
    </div>
  );
}

export default App;
