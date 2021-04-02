import React from 'react';
import classes from './Signin.module.css';
import Button from '../../Component/Button/Button';
import Store from '../../Pages/Store/Store';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const signin = (props) => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/singin" exact component={signPage}/>
                    <Route path="/Store" component={Store} />
                </Switch>
            </div>
        </Router>
    );
}

const signPage = () => (
    <div className={classes.container}>
        <h1 className={classes.h1}>Welcome Back</h1>
        <form>
            <input className={classes.input} type="text" placeholder=" UserName..."/>
            <input className={classes.input} type="password" placeholder="password..."/>
            <Link to='/Store'>
                <Button type='primary' name='Sign in' />
            </Link>
        </form>
    </div>
);

export default signin;
