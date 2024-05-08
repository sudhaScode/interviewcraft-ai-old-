import Header from './Components/Header';
import './App.css';
import Main from './Main';
import React,{useState} from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const onAuthentication =(auth)=>{
    if(auth === "ba-ft-efo-er-re"){
      setIsLogin(true);
    }
    else{
      setIsLogin(false);
    }

  }
  return (
    <div className="App">
      <Header onAuthentication={onAuthentication}/>
      <Main isLogin={isLogin}/>      
    </div>
  );
}

export default App;
