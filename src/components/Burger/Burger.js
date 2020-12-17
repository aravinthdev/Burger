import React from 'react';
import classes from './Burger.module.css';
import BurgerIncredient from './BurgerIncredient/BurgerIncredient';

const Burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIncredient type="bread-top"/>
            <BurgerIncredient type="Meat"/>
            <BurgerIncredient type="Bacon"/>
            <BurgerIncredient type="Salad"/>
            <BurgerIncredient type="Cheese"/>
            <BurgerIncredient type="bread-bottom"/>
        </div>
    )
}

export default Burger;