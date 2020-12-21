import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.6, 
    meat: 1.2, 
    bacon: 0.8, 
    cheese: 1.5
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            Meat: 0,
            Salad: 0,
            Bacon: 0,
            Cheese: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        console.log(updatedIngredients)
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice : newPrice , ingredients : updatedIngredients})
        
    }

    removeIngredientHandler = (type) => {

    }

    render() {
        return (
            <Auxs>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler}/>
            </Auxs>
        )
    }
}

export default BurgerBuilder;