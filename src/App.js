import React from "react";
import UserRepositories from "./components/UserRepositories";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' 
import { gsap } from "gsap";
import HeaderAnimation from "./components/HeaderAnimation";

function App() {

  
  return (
    <body>
      <header>
      <HeaderAnimation/>
      </header>

      <UserRepositories username="hunterstorm" />
    </body>
  )
}

export default App;