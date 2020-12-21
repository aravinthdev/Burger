import React,{ Component } from 'react';
import Auxs from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            Meat: 0,
            Salad: 0,
            Becon: 0,
            Cheese: 0
        }
    }
    render() {
        return(
            <Auxs>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Auxs>
        )
    }
}

export default BurgerBuilder;