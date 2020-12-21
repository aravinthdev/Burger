import React,{ Component } from 'react';
import Auxs from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger';

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
                <div>Burger Controls</div>
            </Auxs>
        )
    }
}

export default BurgerBuilder;