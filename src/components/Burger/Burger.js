import React from 'react';
import classes from './Burger.module.css';
import BurgerIncredient from './BurgerIncredient/BurgerIncredient';

const Burger = (props) => {
    const transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
        console.log(igKey)
        return[...Array(props.ingredients[igKey])]
        .map((_,i) => {
                return <BurgerIncredient key={igKey + i} type={igKey}/>
            })
        })
    console.log(transformedIngredient)
    return(
        <div className={classes.Burger}>
            <BurgerIncredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIncredient type="bread-bottom"/>
        </div>
    )
}

export default Burger;