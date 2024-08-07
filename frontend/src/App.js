
import './App.css';
import Main from './Main';
import React,{useState} from 'react';
import "react-chatbot-kit/build/main.css";
import router from './components/routing/Router';
import { RouterProvider } from 'react-router-dom';
import {Provider} from "react-redux";
import { persistedStore} from './reduxstore/Store';


function App() {

  return (
    <Provider store={persistedStore}>
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </Provider>
  );
}

export default App;