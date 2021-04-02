import React from 'react';
import classes from './Card.module.css';
import Button from '../Button/Button'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const card = (props) => {

    return (
        <div className={classes.card}>
            <Link to={`Store/single/${props.id}`}><img src={props.img}/></Link>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <Button name='Add to Card' type='third' />
        </div>
    );
}

export default card;
