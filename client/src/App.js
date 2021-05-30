import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import './styles/index.css';
import useToken from "./components/useToken";

function App() {
    const { token, setToken } = useToken();

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
