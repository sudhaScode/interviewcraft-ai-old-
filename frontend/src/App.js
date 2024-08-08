
import './App.css';
import "react-chatbot-kit/build/main.css";
import { RouterProvider } from 'react-router-dom';
import {Provider} from "react-redux";
import { persistedStore} from './reduxstore/Store';
import Router from './components/routing/Router';


function App() {

  return (
    <Provider store={persistedStore}>
      <div className="App">
        <RouterProvider router={Router}/>
      </div>
    </Provider>
  );
}

export default App;
