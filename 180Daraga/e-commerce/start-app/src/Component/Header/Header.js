import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/logo.png'
import Input from "../Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faShoppingCart, faHeadphones, faLaptop, faMobileAlt, faTimes, faSignOutAlt, faReplyAll} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const header = (props) => {


    const openSlideMenu = () => {
        document.getElementById("menu").style.width="300px";
        document.getElementById("content").style.marginLeft="300px";
    }
    const closeSideMenu = () => {
        document.getElementById("menu").style.width="0";
        document.getElementById("content").style.marginLeft="0";
    }

    return (
        <div>
            <div id="content">

                <div id="menu" className={classes.nav}>
                    <div className={classes.icons}>
                        <h3>Categories</h3>
                            <FontAwesomeIcon className={classes.close} onClick={closeSideMenu} icon={faTimes}/>
                    </div>
                    <div >
                        <a onClick={() => props.filter('All')} className={classes.a}><FontAwesomeIcon className={classes.fonticons} icon={faReplyAll}/> All </a>
                        <a onClick={() => props.filter('Mobile')} className={classes.a}><FontAwesomeIcon className={classes.fonticons} icon={faMobileAlt}/> Mobiles </a>
                        <a onClick={() => props.filter('Laptop')} className={classes.a} ><FontAwesomeIcon className={classes.fonticons} icon={faLaptop} />Laptops </a>
                        <a onClick={() => props.filter('Headphones')} className={classes.a} ><FontAwesomeIcon className={classes.fonticons} icon={faHeadphones} />Headphones</a>
                        <Link className={classes.a} to={'/singin'}><FontAwesomeIcon className={classes.fonticons} icon={faSignOutAlt} />Log out</Link>

                    </div>
                </div>
            </div>
            <div className={classes.header}>
                <div className={classes.icons}>
                    <FontAwesomeIcon onClick={openSlideMenu} icon={faBars} />
                </div>
                    <img className={classes.logo} src={Logo} />
                <div className={classes.search}>
                    <Input holder='Search'/>
                </div>
                <div className={classes.icons}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            </div>

        </div>
    );
}



export default header;
