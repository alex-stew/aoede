import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Home from "./components/Home";
import { AuthProvider } from "./contexts/AuthContext";
import './styles/index.css';


function App() {
    return (
      <AuthProvider>
        <Signup/>
      </AuthProvider>
  );   
}

export default App;
