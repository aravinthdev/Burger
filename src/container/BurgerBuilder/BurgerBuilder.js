import React,{ Component } from 'react';
import Auxs from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return(
            <Auxs>
                <Burger />
                <div>Burger Controls</div>
            </Auxs>
        )
    }
}

export default BurgerBuilder;