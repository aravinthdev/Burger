import React,{ Component } from 'react';
import Auxs from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            Meat: 2,
            Salad: 1,
            Becon: 2,
            Cheese: 2
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