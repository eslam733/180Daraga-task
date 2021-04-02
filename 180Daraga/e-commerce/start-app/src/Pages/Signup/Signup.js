import React from 'react';
import classes from './Signup.module.css';
import Button from '../../Component/Button/Button'
import Input from "../../Component/Input/Input";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const signup = (props) => {

    return (
        <div className={classes.App}>
            <div className={classes.form}>
                <div className={classes.container}>

                    <div className={classes.left}>
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login</p>
                        <Link to="/singin">
                            <Button
                                name='sign in'
                                type='primary'
                            />
                        </Link>

                    </div>
                    <div className={classes.right}>
                        <h1 className={classes.primary}>Create Account</h1>
                        <Input holder='Name' iconType='faUser'/>
                        <Input holder='Email' iconType='faEnvelope'/>
                        <Input holder='Password' iconType='faKey'/>
                        <Link to="/singin">
                            <Button
                                name='sign up'
                                type='second'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default signup;
