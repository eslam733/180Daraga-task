import React, {Component} from 'react';
import classes from './App.module.css';
import Signup from './Pages/Signup/Signup';
import Signin from "./Pages/Signin/Signin";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component{
    state = {
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Signup}/>
                        <Route path="/singin" component={Signin} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
