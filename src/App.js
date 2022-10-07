import React from 'react';
import './App.css';
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

function App() {
  return (
    <div className="App">
      <div className=" w-1/2  bg-white absolute top-14 left-20 z-10  shadow-slate-200 shadow-2xl -rotate-1">
        <FirstPage />
      </div>
      <div className="w-1/2 h-screen bg-yellow-50 absolute top-2 right-8 z-0">
        
        <SecondPage/>
      </div>
    </div>
  );
}

export default App;
