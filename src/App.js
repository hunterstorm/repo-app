import React from "react";
import UserRepositories from "./components/UserRepositories";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' 
import HeaderAnimation from "./components/HeaderAnimation";
import UsernameInput from './components/UsernameInput';
import { useSelector } from 'react-redux';

function App() {
    const getUserName = useSelector((state) => state.username.username);
 
    return (
      <body>
        <header>
          <HeaderAnimation />
        </header>
        <UsernameInput />
        <UserRepositories username={getUserName} />
        
      </body>
    );
  
}

export default App;