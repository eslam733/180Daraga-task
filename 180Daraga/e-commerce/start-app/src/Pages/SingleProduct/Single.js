import {React, useEffect, useState} from 'react';
import classes from './Single.module.css';
import Button from '../../Component/Button/Button';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Store from '../Store/Store';

const Single = (props) => {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const  fetchItems = async () => {
        const data = await fetch('https://ecommerce-response.herokuapp.com/');
        const items = await data.json();
        setItems(items);
    }
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/store" exact component={Store} />
                    <Route path="/store/single/:id" component={() => product(items, props.match.params.id)}/>
                </Switch>
            </Router>
        </div>
    );
}

const product = (items, Id) => (
    <div>
        {
            items.map(item => {
                if (item.id === Id) {
                    return (
                        <div className={classes.containerProduct}>
                            <div className={classes.img}>
                                <img src={item.photo}/>
                            </div>
                            <div className={classes.details}>
                                <h2>Name: {item.name}</h2>
                                 <p>Price: {item.price} EGP</p>
                                <p>Categories: {item.category}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Seller: {item.seller}</p>
                                <p>Added: {item.added}</p>
                                <Button name='Add to Cart' type='second' />
                            </div>
                        </div>
                    )
                }
            })
        }
    </div>
)

export default Single;
