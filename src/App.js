
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [tips, setTips] = useState("");


  const fetchTips = async () => {
  const response = await fetch(
      "https://www.boredapi.com/api/activity/"

    );
   const data = await response.json();
   setTips(data.activity);
  };

  useEffect(() => {
    fetchTips();

  }, []);

  return (
    <div className="App">
    <h1> Are you sad? </h1>
    <p className="App"> {tips} </p>
      <button onClick={fetchTips} className="App">New Tip</button>
    </div>
  );
}



export default App;
