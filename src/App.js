import React, { useState } from "react";
import "./App.css";



const App = () => { 
  const [count, setCount] = useState(()=>{
console.log("Çalışıyor");
    return 0
  });
  const handleDecrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="App">
      <button onClick={handleIncrement}>Increment</button>
      {count}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
export default App;

//call back fonksiyonu pahalı işlemleri korumak için kullanılır
