import React from "react";
import UserRepositories from "./components/UserRepositories";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' 
import HeaderAnimation from "./components/HeaderAnimation";
import UsernameInput from './components/UsernameInput';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route}   from 'react-router-dom'; 
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
    const getUserName = useSelector((state) => state.username.username);
    return (
      <BrowserRouter>
        <header>
          <HeaderAnimation /> 
            <Navigation/>
            
        </header>
      <Routes>
        <Route path= "/home" element={<Home/>}/>
        <Route exact path="/app" element={
        <>
          <UsernameInput />
          <UserRepositories username={getUserName}/>
        </>
      } />
      </Routes>
      </BrowserRouter>
    );
  
}

export default App;