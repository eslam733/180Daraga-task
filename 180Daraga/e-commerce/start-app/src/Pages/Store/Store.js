import {React, useEffect, useState} from 'react';
import classes from './Store.module.css';
import Header from '../../Component/Header/Header';
import Card from '../../Component/Card/Card';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Single from '../SingleProduct/Single';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReplyAll, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {load} from "dotenv";


const Store = (props) => {
    let loadDiv = '';

    useEffect(() => {
        fetchItems();
    }, [])

    const [isLoad, setIsLoad] = useState(true);
    const [items, setItems] = useState([]);
    const [showItems, setShowItems] = useState([]);

    const  fetchItems = async () => {
        await fetch('https://ecommerce-response.herokuapp.com/').then(async (e) => {
            if (e) {
                setIsLoad(false);
                const items = await e.json();
                setItems(items);
                setShowItems(items);
            }
        })

    }

    const filterProduct = (filter) => {
        let tempItems = [];
        if (filter === 'All') {
            setShowItems(items);
            return;
        }
        items.forEach(result => {
            if (result.category === filter) {
                tempItems.push(result);
            }
        });
        setShowItems(tempItems);
    }
    if (isLoad) {
        loadDiv = (
            <div className={classes.load}>
                <FontAwesomeIcon className={classes.icon} icon={faSpinner}/>
            </div>
        );
    }
    return (
        <div>
            <Header filter={filterProduct} />
            {loadDiv}
            <Router>
                <div>
                    <Switch>
                        <Route path="/store" exact component={() => storePage(showItems)}/>
                        <Route path="/store/single/:id" component={Single} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

const storePage = (items) => (
    <div className={classes.containerCards}>
        {items.map(item => (
            <Card id={item.id} key={item.id} price={item.price} name={item.name} img={item.photo} />
        ))}
    </div>
);

export default Store;
