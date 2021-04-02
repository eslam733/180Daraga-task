import React from 'react';
import classes from './Input.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const input = (props) => {
    let icon = null;
    if (props.iconType === 'faUser') {
        icon = <FontAwesomeIcon className={classes.icons} icon={faUser} />
    } else if (props.iconType === 'faKey') {
        icon = <FontAwesomeIcon className={classes.icons} icon={faKey} />
    } else if (props.iconType === 'faEnvelope') {
        icon = <FontAwesomeIcon className={classes.icons} icon={faEnvelope} />
    }
    return (
        <div>
            {icon}
            <input placeholder={props.holder} />
        </div>
    );
}

export default input;
