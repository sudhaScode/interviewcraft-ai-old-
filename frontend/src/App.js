import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './Main';
import React from 'react';

function App({isLogin}) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main isLogin={isLogin}/>} />
      </Routes>
    </div>
  );
}

export default App;