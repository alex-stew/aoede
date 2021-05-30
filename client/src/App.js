import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import './styles/index.css';


function App() {
    return (
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
          </Switch>
          
        </AuthProvider>
      </Router>
      
  );   
}

export default App;
