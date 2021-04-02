import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    const assginClass = [];
    if (props.type === 'primary') {
        assginClass.push(classes.primary);
    } else if (props.type === 'second') {
        assginClass.push(classes.second);
    } else if (props.type === 'third') {
        assginClass.push(classes.thrid);
    }
    return (
        <div>
            <button className={assginClass[0]}>{props.name}</button>
        </div>
    );
}

export default button;
