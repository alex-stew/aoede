import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import './styles/index.css';

function setToken(userToken){
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(){
}

function App() {
    const token = getToken();

    if(!token) {
      return <Login setToken={setToken} />
    }
    return (
       <div className="h-full p-5">
         <h1>_Aoede_</h1>
         <BrowserRouter>
          <Switch>
          <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
         </BrowserRouter>
       </div>
  );   
}

export default App;
